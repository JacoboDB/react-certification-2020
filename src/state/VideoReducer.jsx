export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_VALUE': {
      return {
        ...state,
        searchValue: action.payload.searchValue,
      };
    }
    case 'SET_THEME': {
      return {
        ...state,
        uiTheme: action.payload.uiTheme,
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
