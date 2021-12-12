"""
These are the URLs that will give you remote jobs for the word 'python'

https://stackoverflow.com/jobs?r=true&q=python
https://weworkremotely.com/remote-jobs/search?term=python
https://remoteok.io/remote-dev+python-jobs

Good luck!
"""
from flask import Flask, request
from flask_cors import CORS
from model import MJRunModel
import json

app = Flask("MJRun Model")
CORS(app)
mModel = MJRunModel()

@app.route("/", methods = ["GET"])
def hello():
  return app.response_class(
        response=json.dumps({'data':"test"}),
        status=200,
        mimetype='application/json'
      )
@app.route("/prediction", methods = ["POST"])
def prediction():
  # print('호출됨')
  data = request.json['data']
  # print(type(data))
  # data = [
  #   [2019,2,23,10,45,3,2,0,0,1,1,2010, 761, 43,2011, 730, 71,1000,0, 7],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2013,1463,199,2011,1087,153,1000,0, 3],
  #   [2019,2,23,10,45,3,2,0,0,2,0,2007, 261, 13,1986, 667, 50,1000,0, 4],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2017, 436, 30,2008, 817, 71,1000,0, 2],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2017, 588, 41,2017, 101, 17,1000,0, 1],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2017, 962,119,2017, 238, 38,1000,0, 8],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2012, 463, 19,2007, 702, 53,1000,0,12],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2019,   9,  1,2006, 491, 26,1000,0, 5],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2014,1370,138,2007, 702, 53,1000,0, 9],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2016, 870, 63,2008, 817, 71,1000,0, 6],
  #   [2019,2,23,10,45,3,2,0,0,1,0,2017, 469, 35,1997,1064,179,1000,0,10],
  #   [2019,2,23,10,45,3,2,0,0,2,0,2004, 277,  4,1997, 496, 33,1000,0,11]
  # ]
  # print(f'data =\n {data}')
  pred = mModel.predict(data)
  response = app.response_class(
        response=json.dumps(pred),
        status=200,
        mimetype='application/json'
    )
  return response

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=3002, debug=True)

# 0: year;
# 1: month;
# 2: day;
# 3: hour;
# 4: min;
# 5: horse_AGE;
# 6: horse_SEX;
# 7: horse_nationality;
# 8: horse_rating;
# 9: horse_TOTAL_RACE_COUNT;
# 10: horse_TOTAL_ORD1_COUNT;
# 11: jockey_DEBUT_YEAR;
# 12: jockey_TOTAL_RACE_COUNT;
# 13: jockey_TOTAL_ORD1_COUNT;
# 14: trainer_DEBUT_YEAR;
# 15: trainer_TOTAL_RACE_COUNT;
# 16: trainer_TOTAL_ORD1_COUNT;
# 17: race_distance;
# 18: LOCATION;
# 19: LineNumber; req[]


