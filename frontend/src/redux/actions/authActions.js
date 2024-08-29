import api from '../../services/api';

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });
    const { data } = await api.post('/auth/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    localStorage.setItem('token', data.token);
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: 'REGISTER_REQUEST' });
    const { data } = await api.post('/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
    localStorage.setItem('token', data.token);
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};