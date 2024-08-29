import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { withdraw } from '../redux/actions/ammActions';

const WithdrawalForm = ({ userId }) => {
  const dispatch = useDispatch();
  const [poolId, setPoolId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(withdraw({ userId, poolId, amount: parseFloat(amount) }));
    setPoolId('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Withdraw from Pool</Typography>
      <TextField
        label="Pool ID"
        value={poolId}
        onChange={(e) => setPoolId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Withdraw
      </Button>
    </form>
  );
};

export default WithdrawalForm