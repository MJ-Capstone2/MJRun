import axios from "axios";

const makeGetRequest = (path, params) =>
  axios.get(`localhost:3000/${path}`,{
    params
  }
);

export const getAnything = async (path, params = {}) => {
  try {
    const {
      data: {results},
      data
    } = await makeGetRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const homeApi = {
  races: () => getAnything("horse-race"),
  race_attendant: () => getAnything("race-attendant"),
  predicts: () => getAnything("")
};

export const horseApi = {};