import Axios from 'axios'

export const baseURL = 'http://localhost:1337'
// export const baseURL = 'http://localhost:5173'

//Axios.defaults.headers.commom['Authorization'] = 'Bearer' + localStorage.getItem('token');

export const api = Axios.create({
  baseURL: `${baseURL}/api/`,
  timeout: 10000
})