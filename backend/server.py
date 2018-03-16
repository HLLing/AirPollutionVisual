from flask import Flask
import json
import database
app = Flask(__name__)


@app.route('/')
def welcome():
    return "hello world"

@app.route('/map/<datestr>')
def map(datestr):
    print datestr
    date_info = datestr.split("+")
    year = int(date_info[3])
    month = date_info[1]
    date = int(date_info[2])
    hour = (date_info[4].split(":")[0])
    print year, month, date, hour
    data = database.get_car_info(year, month, date, hour)
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response



if __name__ == '__main__':
    app.run()