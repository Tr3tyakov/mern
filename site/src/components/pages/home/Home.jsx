import React from 'react';
import { useSelector } from 'react-redux';
import AuthModal from '../header/AuthModal';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { useStyles } from './style';
import Welcome from '../Welcome/Welcome';
function Home() {
  const classes = useStyles();
  const { email, password, isAuth, isLoading } = useSelector(({ authReducer }) => {
    return {
      email: authReducer.email,
      password: authReducer.password,
      isAuth: authReducer.isAuth,
      isLoading: authReducer.isLoading,
    };
  });
  if (isLoading) {
    return (
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <Container>{isAuth ? <Welcome /> : <AuthModal email={email} password={password} />}</Container>
  );
}

export default Home;
