import instance from './instance';

const api = {
  getCountries: () => {
    return instance.get('/api/countries');
  },

  getLeagues: () => {
    return instance.get('/api/menu-leagues');
  },

  getMatches: (date: string) => {
    return instance.get(`/api/matches/${date}`);
  },

  getMatchDetail: (id: string = '') => {
    return instance.get(`/api/match/${id}`);
  },

  getMenuData: (slug: string) => {
    return instance.get(`/api/menu/${slug}`);
  },

  getMatchFromMenu(slug: string) {
    return instance.get(`api/matches/soccer/${slug}`);
  },
};

export default api;
