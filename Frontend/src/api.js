import axios from "axios";

const makeRequest = (path, params) =>
  axios.get(`localhost:3000/${path}`,{
    params
  }
);

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: {results},
      data
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};