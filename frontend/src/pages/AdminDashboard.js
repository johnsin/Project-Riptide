import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Container, List, ListItem, ListItemText } from '@material-ui/core';
import { getUsers } from '../redux/actions/userActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="h5" gutterBottom>Users</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.username} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminDashboard;