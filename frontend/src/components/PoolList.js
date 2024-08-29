// /frontend/src/components/PoolList.js
import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const PoolList = ({ pools }) => {
  console.log('Pools to display:', pools); // Log the pools being passed to the component

  if (!pools || pools.length === 0) {
    return <Typography>No AMM pools available.</Typography>;
  }

  return (
    <List>
      {pools.map((pool) => (
        <ListItem key={pool.poolId}>
          <ListItemText
            primary={`${pool.asset1} / ${pool.asset2}`}
            secondary={
              <React.Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  Liquidity: {pool.liquidity}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default PoolList;