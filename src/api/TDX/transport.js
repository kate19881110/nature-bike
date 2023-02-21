import axios from 'axios';
import getAuthorizationHeader from './getAuthorizationHeader';

export const rentBike = axios.create({
    headers: getAuthorizationHeader(),
    baseURL: 'https://ptx.transportdata.tw/api/basic/v2/Bike/'
  })
  export const cyclingRoute = axios.create({
    headers: getAuthorizationHeader(),
    baseURL: 'https://ptx.transportdata.tw/api/basic/v2/Cycling/Shape/City'
  })
