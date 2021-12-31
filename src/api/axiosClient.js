import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://618a498434b4f400177c4549.mockapi.io',
  /* headers: {
    'Content-type': 'multipart/form-data'
  }, */
  // headers: {
  //   'Content-Type': 'application/json',
  // }
})