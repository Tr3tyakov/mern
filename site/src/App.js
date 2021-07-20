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
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import { setModal, setMenu } from './components/reducers/actions/actions';
import { logout } from './components/reducers/actions/asyncActions';
import Auth from './components/pages/auth/auth';

function App() {
  const dispatch = useDispatch();
  const { email, password, isAuth, openModal, openMenu } = useSelector(
    ({ AuthReducer, AuthModal }) => {
      return {
        email: AuthReducer.email,
        password: AuthReducer.password,
        isAuth: AuthReducer.isAuth,
        openMenu: AuthModal.openMenu,
        openModal: AuthModal.openModal,
      };
    },
  );
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
    avatar: {
      cursor: 'pointer',
    },
  });
  const classes = useStyles();
  //modal authorization
  const handleOpen = () => {
    dispatch(setModal(true));
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };

  //menu user avatar
  const handleClickMenu = (event) => {
    dispatch(setMenu(event.currentTarget));
  };
  const handleCloseMenu = () => {
    dispatch(setMenu(null));
  };

  const makeLogout = () => {
    dispatch(logout());
    dispatch(setMenu(null));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit"></IconButton>
          <Menu
            id="simple-menu"
            anchorEl={openMenu}
            keepMounted
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}>
            <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
            <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
            <MenuItem onClick={makeLogout}>Logout</MenuItem>
          </Menu>
          {isAuth ? (
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.avatar}
              onClick={handleClickMenu}
            />
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
