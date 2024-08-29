import api from './api';

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

export const loadUser = async () => {
  try {
    const res = await api.get('/auth');
    return res.data;
  } catch (error) {
    console.error('Error loading user', error);
    throw error;
  }
};