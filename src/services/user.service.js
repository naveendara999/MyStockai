import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://http://localhost:3001/';

const getToplist = () => {
  return axios.get(API_URL + 'toplist', { headers: authHeader() });
};

const getTransaction = () => {
  return axios.get(API_URL + 'transaction', { headers: authHeader() });
};

const getIdeas = () => {
  return axios.get(API_URL + 'ideas', { headers: authHeader() });
};
const getStockDetails = () => {
  return axios.get(API_URL + 'stockDetails/:stock', { headers: authHeader() });
};

export default {
  getToplist,
  getTransaction,
  getIdeas,
  getStockDetails,
};
