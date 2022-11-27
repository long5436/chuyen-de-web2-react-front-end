const initState = {
  matchToday: [],
  followLeagueId: '',
  enableMobileMenu: false,
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

    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        enableMobileMenu: !state.enableMobileMenu,
      };

    default:
      throw new Error(`Invalid action`);
  }
};

export { initState };
export default reducer;
