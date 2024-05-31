import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://showroom.eis24.me/api/v4/test',
  headers: {
    'Content-Type': 'application/json',
  },
});
