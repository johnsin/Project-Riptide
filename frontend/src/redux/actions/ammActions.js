import api from '../../services/api';

export const getPools = () => async (dispatch) => {
    try {
      dispatch({ type: 'GET_POOLS_REQUEST' });
      const { data } = await api.get('/amm/pools');
  
      console.log('Fetched AMM Pools:', data); // Log the data received from the backend
  
      dispatch({ type: 'GET_POOLS_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching AMM pools:', error);
      dispatch({ type: 'GET_POOLS_FAIL', payload: error.response?.data?.message || 'Failed to fetch AMM pools' });
    }
  };

export const contribute = (contributionData) => async (dispatch) => {
  try {
    dispatch({ type: 'CONTRIBUTE_REQUEST' });
    const { data } = await api.post('/amm/contribute', contributionData);
    dispatch({ type: 'CONTRIBUTE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CONTRIBUTE_FAIL', payload: error.response.data.message });
  }
};

export const withdraw = (withdrawalData) => async (dispatch) => {
  try {
    dispatch({ type: 'WITHDRAW_REQUEST' });
    const { data } = await api.post('/amm/withdraw', withdrawalData);
    dispatch({ type: 'WITHDRAW_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'WITHDRAW_FAIL', payload: error.response.data.message });
  }
};