import React from 'react';
import { Box, Container, TextField, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setPassword, setEmail } from '../actions/actions';
import { registration, login } from '../actions/asyncActions';

function Auth({ email, password }) {
  const dispatch = useDispatch();

  const makeRegistration = () => {
    dispatch(registration(email, password));
  };
  const makeLogin = () => {
    dispatch(login(email, password));
  };
  const changePassword = (value) => {
    dispatch(setPassword(value));
  };
  const changeEmail = (value) => {
    dispatch(setEmail(value));
  };
  return (
    <>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          height="100%"
          margin="50px 0 0 0"
          borderRadius="10px"
          padding="10px">
          <Typography variant="h5" color="primary" gutterBottom>
            Вход MERN
          </Typography>
          <Box component="div" margin="10px 20px">
            <TextField
              color="primary"
              label="Email"
              variant="filled"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}></TextField>
          </Box>
          <Box margin="10px 20px">
            <TextField
              color="primary"
              label="Password"
              variant="filled"
              value={password}
              onChange={(e) => changePassword(e.target.value)}></TextField>
          </Box>
          <Box width="300px" display="flex" justifyContent="space-between" margin="20px 0">
            <Button variant="contained" color="primary" onClick={makeLogin}>
              Войти
            </Button>
            <Button variant="contained" color="secondary" onClick={makeRegistration}>
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Auth;
