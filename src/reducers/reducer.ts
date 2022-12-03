const initState = {
  matchToday: [],
  followLeagueId: localStorage.followLeagueId ? localStorage.followLeagueId : '',
  enableMobileMenu: false,
  date: '',
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

    case 'CHANGE_DATE': {
      return {
        ...state,
        date: action.payload,
      };
    }

    default:
      throw new Error(`Invalid action`);
  }
};

export { initState };
export default reducer;
