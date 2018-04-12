from flask import Flask
import json
import database
from datetime import datetime
import datetime
app = Flask(__name__)


@app.route('/')
def welcome():
    return "hello world"

@app.route('/map/<datestr1>/<datestr2>')
def map(datestr1, datestr2):
    print datestr1
    print datestr2
    date_info1 = datestr1.split(" ")
    date_info2 = datestr2.split(" ")
    print date_info1
    year = int(date_info1[3])
    month = date_info1[1]
    date = int(date_info1[2])
    hour = (date_info2[4].split(":")[0])
    print year, month, date, hour
    data = database.get_car_info(year, month, date, hour)
    print data
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/map/<timestamp>')
def map_timestamp(timestamp):
    dt = datetime.datetime.fromtimestamp(timestamp / 1000.0)
    year = dt.year
    month = dt.month
    date = dt.day
    hour = dt.hour
    data = database.get_car_info(year, month, date, hour)
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == '__main__':
    app.run()