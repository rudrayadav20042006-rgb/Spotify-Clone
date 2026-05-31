export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discover_weekly: null, // <-- 1. Add the new state
};

const reducer = (state, action) => {
  console.log(action); 
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    // 2. Add the case to handle the new playlist
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
   const reducer = (state, action) => {
  console.log(action); 
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists };
    case 'SET_DISCOVER_WEEKLY':
      return { ...state, discover_weekly: action.discover_weekly };
      
    // 1. Add this new case to catch the song data!
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
      
    default:
      return state;
  }
};
};

export default reducer;