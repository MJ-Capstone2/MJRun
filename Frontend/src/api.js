import axios from 'axios';
import { setAuthorizationToken } from './utils';

axios.defaults.baseURL = 'http://localhost:3000/api/';
setAuthorizationToken(localStorage.jwtToken);

const makeRequest = {
  get: (path, params) =>
    axios.get(`${path}`, {
      params,
    }),
  delete: (path, params) =>
    axios.delete(`${path}`, {
      params,
    }),
  post: (path, body) => axios.post(`${path}`, body),
};

async function getAnything(path, params = {}) {
  try {
    const {
      data,
    } = await makeRequest.get(path, params);
    return [data, null];
  } catch (e) {
    return [null, e];
  }
}

export async function deleteAnything(path, params = {}) {
  try {
    const res = await makeRequest.delete(path, params);
    return [res, null];
  } catch (e) {
    return [null, e];
  }
}

export async function postAnything(path, body = {}) {
  try {
    const {
      data: { accessToken },
    } = await makeRequest.post(path, body);
    return [accessToken, null];
  } catch (e) {
    return [null, e];
  }
}

export const homeApi = {
  raceDatas: (race_date) => getAnything('all-info/at-date', { race_date }),
  ord1: getAnything('aiprediction/precision', { period: 'month', order: 1 }),
  ord2: getAnything('aiprediction/precision', { period: 'month', order: 2 }),
  ord3: getAnything('aiprediction/precision', { period: 'month', order: 3 }),
};

export const adminApi = {
  horses: getAnything('horse-aggregation'),
  jockeys: getAnything('jockey'),
  trainers: getAnything('trainer'),
  infos: getAnything('horse-race?race_date=20160102'),
  results: getAnything('all-info/results'),
  login: async (Id, Pwd) => {
    const [token, ] = await postAnything('admin/signin', {
      id: Id,
      password: Pwd,
    });
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
  },
  validation: getAnything('admin/validation'),
//   upload: async (csvFile) => {
//     const [res, err] = await postAnything('all-info/create', {
//       files: csvFile
//     });
//     console.log(res);
//     console.log(err);
//   }
};

export const precisionApi = {
  ord1: getAnything('aiprediction/precision', { period: 'week', order: 1 }),
  ord2: getAnything('aiprediction/precision', { period: 'week', order: 2 }),
  ord3: getAnything('aiprediction/precision', { period: 'week', order: 3 }),
  week: getAnything('aiprediction/precision', { period: 'week' }),
  month: getAnything('aiprediction/precision', { period: 'month' }),
};