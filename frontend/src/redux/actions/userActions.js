import api from '../../services/api';

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USERS_REQUEST' });
    const { data } = await api.get('/users');
    dispatch({ type: 'GET_USERS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_USERS_FAIL', payload: error.response.data.message });
  }
};

export const updateProfile = (profileData) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
    const { data } = await api.put('/users/profile', profileData);
    dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PROFILE_FAIL', payload: error.response.data.message });
  }
};