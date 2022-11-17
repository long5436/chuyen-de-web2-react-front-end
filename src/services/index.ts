import instance from './instance';

const api = {
  getCountries: () => {
    return instance.get('/api/all/countries');
  },
};

export default api;
