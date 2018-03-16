import pickle

def load_obj(filename):
    with open(filename, 'rb') as f:
        return pickle.load(f)

def get_car_info(year, month, date, hour):
    fake_data = load_obj("fake_data.pkl")
    return fake_data