import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to XRPL AMM
      </Typography>
      <Typography variant="body1" paragraph>
        Explore and interact with Automated Market Maker (AMM) Liquidity Pools on the XRP Ledger.
      </Typography>
    </Container>
  );
};

export default Home;