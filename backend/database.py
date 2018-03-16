import pickle


month_map = {"Jan":1, "Feb":2, "Mar":3, "Apr":4, "May":5, "Jun":6, "Jul":7, "Aug":8, "Sep":9, "Oct":10, "Nov":11, "Dec":12}
def load_obj(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)

def get_car_info(year, month, date, hour):
    fake_data = load_obj("fake_data.pkl")
    return fake_data