const setMatch = (payload: any) => {
  return {
    type: 'SET_MATCH',
    payload,
  };
};

const setFollowLeagueId = (payload: any) => {
  return {
    type: 'SET_FOLLOW_LEAGUE_ID',
    payload,
  };
};

const toggleMobileMenu = () => {
  return {
    type: 'TOGGLE_MOBILE_MENU',
  };
};

const changeDate = (payload: any) => {
  return {
    type: 'CHANGE_DATE',
    payload,
  };
};

export { setMatch, setFollowLeagueId, toggleMobileMenu, changeDate };
