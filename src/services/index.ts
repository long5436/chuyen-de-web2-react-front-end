import instance from './instance';

const api = {
  getCountries: () => {
    return instance.get('/api/all/countries');
  },

  getMatchesToday: () => {
    return instance.get('/api/matches/today');
  },

  getMatchDetail: (id: string = '') => {
    return instance.get(`/api/match/${id}`);
  },
};

export default api;
