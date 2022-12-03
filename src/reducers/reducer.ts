const initState = {
  matchToday: [],
  followLeagueId: localStorage.followLeagueId ? localStorage.followLeagueId : '',
  enableMobileMenu: false,
  date: '',
  topScoreData: [],
  searchMatch: '',
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
    case 'ADD_TOPSCORE': {
      return {
        ...state,
        topScoreData: action.payload,
      };
    }
    case 'SET_SEARCH_MATCH': {
      return {
        ...state,
        searchMatch: action.payload,
      };
    }

    default:
      throw new Error(`Invalid action`);
  }
};

export { initState };
export default reducer;
