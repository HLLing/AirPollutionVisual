from flask import Flask
import json
import database
app = Flask(__name__)


@app.route('/')
def welcome():
    return "hello world"

@app.route('/map/<year>/<month>/<date>/<hour>')
def map(year, month, date, hour):
    print year,month,date,hour
    data = database.get_car_info(year, month, date, hour)
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response



if __name__ == '__main__':
    app.run()