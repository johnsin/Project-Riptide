const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case 'GET_USERS_REQUEST':
      case 'UPDATE_PROFILE_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'GET_USERS_SUCCESS':
        return {
          ...state,
          loading: false,
          users: action.payload,
          error: null
        };
      case 'UPDATE_PROFILE_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null
        };
      case 'GET_USERS_FAIL':
      case 'UPDATE_PROFILE_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }