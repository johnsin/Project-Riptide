// /frontend/src/redux/reducers/ammReducer.js
const initialState = {
    pools: [],
    loading: false,
    error: null
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case 'GET_POOLS_REQUEST':
      case 'CONTRIBUTE_REQUEST':
      case 'WITHDRAW_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'GET_POOLS_SUCCESS':
        console.log('Pools data in reducer:', action.payload); // Inspect data structure in reducer
        return {
          ...state,
          loading: false,
          pools: action.payload,
          error: null
        };
      case 'CONTRIBUTE_SUCCESS':
      case 'WITHDRAW_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null
        };
      case 'GET_POOLS_FAIL':
      case 'CONTRIBUTE_FAIL':
      case 'WITHDRAW_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  