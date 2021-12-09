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
  races: () => getAnything("localhost:3000/horse-race", { race_date :"2016-01-08"}),
  race_attendant: () => getAnything("localhost:3000/race-attendant"),
  predicts: () => getAnything("localhost:3000/")
}