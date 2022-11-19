import instance from './instance';

const api = {
  getCountries: () => {
    return instance.get('/api/all/countries');
  },

  getMatchesToday: () => {
    return instance.get('/api/matches/today');
  },
};

export default api;
