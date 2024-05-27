import axios from 'axios';
import {Platform} from 'react-native';

export const api = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.0.42:8000/api/v1/'
      : 'http://127.0.0.1:8000/api/v1/',
  withCredentials: true,
});

//http://10.0.2.2:8000/api/v1/
//http://192.168.0.42:8000/api/v1/
