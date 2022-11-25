const initState = {
  matchToday: [],
  followLeagueId: '',
};

const reducer = (state: InitState, action: Action) => {
  switch (action.type) {
    case 'SET_MATCH':
      return {
        ...state,
        matchToday: action.payload,
      };
    case 'SET_FOLLOW_LEAGUE_ID':
      return {
        ...state,
        followLeagueId: action.payload,
      };

    default:
      throw new Error(`Invalid action`);
  }
};

export { initState };
export default reducer;
