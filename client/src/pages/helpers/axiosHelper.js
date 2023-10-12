import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8080';

const api = axios.create({
  baseURL: BASE_URL,
});

const AxiosHelper = {
  get: (url, params = {}) => {
    console.log(url, params);
    return api.get(url, { params })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  post: (url, data = {}) => {
    console.log(url, data);
    return api.post(url, data)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};

export default AxiosHelper;
