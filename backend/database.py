import pickle
import mysql.connector
from datetime import datetime
import datetime
from datetime import timedelta
import bisect
import random

config = {
  'user': 'root',
  'password': '123456',
  'host': '127.0.0.1',
  'database': 'airpollution',
  'raise_on_warnings': True,
}

HOURLY = "hourly"
WEEKLY = "weekly"
DAILY = "daily"

MAX_POINT = 30

def generate_time_map(frequency_type):
    starttime = datetime.datetime(2017,4,1,0,0,0,0)  # Apr 1st, 2017 00:00:00.000000
    endtime = datetime.datetime(2018,1,1,0,0,0,0)    # Jan 1st, 2018 00:00:00.000000

    curtime = starttime
    arr = []

    while curtime < endtime:
        arr.append(datetime2matlabdn(curtime))
        if frequency_type == WEEKLY:
            curtime = curtime + timedelta(days=7)
        elif frequency_type == HOURLY:
            curtime = curtime + timedelta(hours=1)
        elif frequency_type == DAILY:
            curtime = curtime + timedelta(days=1)
        else:
            raise ValueError('Wrong Frequency Type!')

    return arr

def find_largest_smaller_than(array, element):
    ind = bisect.bisect_left(array, element)
    if ind < len(array) and abs(array[ind] - element) < 1e-15:
        return ind
    if ind == 0:
        return ind
    return ind-1

def datetime2matlabdn(dt):
    mdn = dt + timedelta(days = 366)
    frac_seconds = (dt-datetime.datetime(dt.year,dt.month,dt.day,0,0,0)).seconds / (24.0 * 60.0 * 60.0)
    frac_microseconds = dt.microsecond / (24.0 * 60.0 * 60.0 * 1000000.0)
    return mdn.toordinal() + frac_seconds + frac_microseconds

def get_hourid(year, month, date, hour):
    time_map = generate_time_map(HOURLY)
    time = datetime.datetime(year=year, month=month, day=date, hour=hour)
    ind = find_largest_smaller_than(time_map, datetime2matlabdn(time))
    return ind

month_map = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12}
def load_obj(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)

def get_car_info(year, month, date, hour):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    hourid = get_hourid(year, month, date, hour)
    query = "SELECT logitude, latitude, pm2d5 FROM mapdata WHERE hourid='%d'" % hourid
    cursor.execute(query)
    infos = []
    for (logitude, latitude, pm25) in cursor:
        infos.append({"logitude":logitude, "latitude":latitude, "pm2d5":pm25})

    cursor.close()
    cnx.close()
    if len(infos) > MAX_POINT:
        res = random.sample(infos, MAX_POINT)
    else:
        res = infos
    return res

def get_car_info_fake(year, month, date, hour):

    fake_data = load_obj("fake_data.pkl")
    return fake_data