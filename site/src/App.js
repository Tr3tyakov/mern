import React from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Container,
  TextField,
  Typography,
  Button,
  AppBar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { setPassword, setEmail } from './components/actions/action';
function App() {
  const dispatch = useDispatch();
  const { email, password } = useSelector(({ AuthReducer }) => {
    return {
      email: AuthReducer.email,
      password: AuthReducer.password,
    };
  });

  const changePassword = (value) => {
    dispatch(setPassword(value));
  };
  const changeEmail = (value) => {
    dispatch(setEmail(value));
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
              color="primary"
              variant="filled"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}></TextField>
          </Box>
          <Box margin="10px 20px">
            <TextField
              color="primary"
              label="Password"
              color="primary"
              variant="filled"
              value={password}
              onChange={(e) => changePassword(e.target.value)}></TextField>
          </Box>
          <Box width="300px" display="flex" justifyContent="space-between" margin="20px 0">
            <Button variant="contained" color="primary">
              Войти
            </Button>
            <Button variant="contained" color="secondary">
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
