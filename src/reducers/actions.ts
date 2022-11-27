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

export { setMatch, setFollowLeagueId, toggleMobileMenu };
