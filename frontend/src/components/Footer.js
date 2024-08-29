import React from 'react';
import { Typography, Container, Link } from '@material-ui/core';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://yourwebsite.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;