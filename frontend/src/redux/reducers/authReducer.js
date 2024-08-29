const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case 'LOGIN_REQUEST':
      case 'REGISTER_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload.user,
          error: null
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: action.payload
        };
      default:
        return state;
    }
  }