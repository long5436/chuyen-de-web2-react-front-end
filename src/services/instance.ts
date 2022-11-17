import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const get = async (path: string, options = {}) => {
  const response = await instance.get(path, options);
  return response.data;
};

export default instance;
