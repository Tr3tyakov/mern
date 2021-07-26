import React from 'react';
import { Box, Container, TextField, Typography, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setPassword, setEmail } from '../../reducers/actions/actions';
import { registration, login } from '../../reducers/actions/asyncAuthActions';

function Auth({ email, password }) {
  const dispatch = useDispatch();
  const [errorsPassword, setErrorsPassword] = React.useState(false);
  const [errorsEmail, setErrorsEmail] = React.useState(false);
  const makeRegistration = () => {
    dispatch(registration(email, password));
  };
  const makeLogin = () => {
    dispatch(login(email, password));
  };
  const validationPassword = (event) => {
    const value = event.target.value;
    const check = value.length > 8;
    dispatch(setPassword(value));
    if (!check) {
      return setErrorsPassword(true);
    }
    setErrorsPassword(false);
  };
  const validationEmail = (event) => {
    const value = event.target.value;
    const check = RegExp(/[@]/gi).test(value);
    dispatch(setEmail(value));
    if (!check) {
      return setErrorsEmail(true);
    }
    setErrorsEmail(false);
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
              error={errorsEmail}
              helperText={errorsEmail && 'Некорректный email'}
              onChange={validationEmail}></TextField>
          </Box>
          <Box margin="10px 20px">
            <TextField
              color="primary"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              error={errorsPassword}
              helperText={errorsPassword && 'Пароль должен быть длинее 8 символов'}
              onChange={validationPassword}></TextField>
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
