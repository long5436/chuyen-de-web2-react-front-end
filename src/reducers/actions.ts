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

export { setMatch, setFollowLeagueId };
