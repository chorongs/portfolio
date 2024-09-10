import axios from 'axios';

const API_KEY = process.env.REACT_APP_KOPIS_API_KEY;

const api = axios.create({
    baseURL: 'http://kopis.or.kr/openApi/restful',
    headers: {
        Accept: 'application/json',
    },
});


api.interceptors.request.use(
  function (config) {

    config.params = {
      ...config.params,
      service: API_KEY, 
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;