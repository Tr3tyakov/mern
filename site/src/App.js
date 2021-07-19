import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Avatar,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from './components/auth/auth';
import { setModal } from './components/actions/actions';

function App() {
  const dispatch = useDispatch();
  const { email, password, isAuth, openModal } = useSelector(({ AuthReducer, AuthModal }) => {
    return {
      email: AuthReducer.email,
      password: AuthReducer.password,
      isAuth: AuthReducer.isAuth,

      openModal: AuthModal.openModal,
    };
  });
  const useStyles = makeStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuButton: {
      marginRight: 'auto',
    },
    box: {
      padding: '10px',
      width: '600px',
      height: '400px',
      backgroundColor: 'white',
      borderRadius: '10px',
    },
  });
  const classes = useStyles();

  const handleOpen = () => {
    dispatch(setModal(true));
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          {isAuth ? (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          ) : (
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={openModal}>
          <Box className={classes.box}>
            <Auth email={email} password={password} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default App;
