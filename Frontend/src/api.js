import axios from 'axios';

const makeGetRequest = (path, params) =>
  axios.get(`http://localhost:3000/api/${path}`, {
    params,
  });

export async function getAnything(path, params = {}) {
  try {
    const {
      data: { results },
      data,
    } = await makeGetRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const homeApi = {
  races: () => getAnything('horse-race'),
  race_attendant: () => getAnything('race-attendant'),
  predicts: () => getAnything(''),
};

export const adminApi = {
  horses : getAnything('horse-aggregation'),
  jockeys: getAnything('jockey'),
  trainers: getAnything('trainer')
};

export const precisionApi = {
  ord1: getAnything('aiprediction/precision',{'period':'week','order':1}),
  ord2:getAnything('aiprediction/precision',{'period':'week','order':2}),
  ord3:getAnything('aiprediction/precision',{'period':'week','order':3}),
  week:getAnything('aiprediction/precision',{'period':'week'}),
  month:getAnything('aiprediction/precision',{'period':'month'}),
}
