// /frontend/src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Container, Grid } from '@material-ui/core';
import { getPools } from '../redux/actions/ammActions';
import PoolList from '../components/PoolList';
import ContributionForm from '../components/ContributionForm';
import WithdrawalForm from '../components/WithdrawalForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { pools, loading, error } = useSelector(state => state.amm);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getPools());
  }, [dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>AMM Pools</Typography>
          <PoolList pools={pools} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Contribute</Typography>
          <ContributionForm userId={user.id} />
          <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>Withdraw</Typography>
          <WithdrawalForm userId={user.id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
