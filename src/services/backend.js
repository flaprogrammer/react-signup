import axios from 'axios';

const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:3002/';

export const signup = (data) => {
  return axios.post(API_HOST + 'signup', data);
};

export const check = (data) => {
  return axios.post(API_HOST + 'check', data);
};
