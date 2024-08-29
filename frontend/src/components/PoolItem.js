import React from 'react';
import { ListItem, ListItemText, Typography } from '@material-ui/core';

const PoolItem = ({ pool }) => {
  return (
    <ListItem>
      <ListItemText
        primary={`${pool.asset1}/${pool.asset2}`}
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              Liquidity: {pool.liquidity}
            </Typography>
            {` — Yield: ${pool.yield}%`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default PoolItem;