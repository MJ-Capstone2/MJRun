import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

const makeRequest = {
  get: (path, params) => 
  axios.get(`${API_URL}${path}`, {
    params,
  }),
  delete: (path, params) => 
  axios.delete(`${API_URL}${path}`, {
    params,
  }),
}

export async function getAnything(path, params = {}) {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest.get(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export async function deleteAnything(path, params = {}) {
  try{
    const res = await makeRequest.delete(path, params);
    return [res, null];
  } catch (e) {
    return [null, e];
  }
}

export const homeApi = (race_date) => {
  return getAnything('all_info_at_date', { race_date });
}

export const adminApi = {
  horses : getAnything('horse-aggregation'),
  jockeys: getAnything('jockey'),
  trainers: getAnything('trainer'),
  infos: getAnything('horse-race?race_date=20160102')
};

export const precisionApi = {
  ord1: getAnything('aiprediction/precision',{'period':'week','order':1}),
  ord2: getAnything('aiprediction/precision',{'period':'week','order':2}),
  ord3: getAnything('aiprediction/precision',{'period':'week','order':3}),
  week: getAnything('aiprediction/precision',{'period':'week'}),
  month: getAnything('aiprediction/precision',{'period':'month'}),
}