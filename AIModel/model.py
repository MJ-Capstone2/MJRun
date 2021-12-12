from os import path 
import numpy as np
import joblib

class MJRunModel():
  __data_columns = ['year', 'month', 'day', 'hour', 'min', 'horse_AGE', 'horse_SEX', 'horse_nationality', 'horse_rating', 'horse_TOTAL_RACE_COUNT', 'horse_TOTAL_ORD1_COUNT', 'jockey_DEBUT_YEAR', 'jockey_TOTAL_RACE_COUNT', 'jockey_TOTAL_ORD1_COUNT', 'trainer_DEBUT_YEAR', 'trainer_TOTAL_RACE_COUNT', 'trainer_TOTAL_ORD1_COUNT', 'race_distance', 'LOCATION', 'LineNumber']
  __config_file_name = 'random_forest.joblib'
  __config_path = path.join(path.abspath(path.dirname(__file__)), __config_file_name)
  def __init__(self):
    self.model = joblib.load(self.__config_path)
    self.__column_dict = {cn:i for i,cn in enumerate(self.__data_columns)}

  def predict(self, race_data):
    np_data = np.array(race_data)
    pred = list(self.model.predict(np_data))
    # print(pred)
    result = {race_data[i][-1]:pred[i] for i in range(len(race_data))}
    # print(result)
    ord_list = [line_number for line_number, _ in sorted(result.items(), key=lambda x:x[1])]
    return ord_list