import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import ammReducer from './reducers/ammReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  amm: ammReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;