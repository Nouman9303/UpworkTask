import axios from 'axios';

import {base_url} from './api-urls';
const UpworkApi = () => {
  const instance = axios.create({
    baseURL: base_url,
    headers: {
      'Content-Type': 'application/x-wwww-form-urlencoded',
    },
  });

  return instance;
};

export {UpworkApi};
