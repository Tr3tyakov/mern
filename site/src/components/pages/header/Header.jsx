import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Auth from './AuthModal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { setModal, setMenu, setDrawer } from '../../reducers/actions/actions';
import { logout } from '../../reducers/actions/asyncAuthActions';
import { useStyles } from './style';
import ModalDrawer from './ModalDrawer';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { serverURL } from '../../utils/http/axios';

function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user, email, password, isAuth, openModal, openMenu, openDrawer } = useSelector(
    ({ authReducer, headerReducer }) => {
      return {
        user: authReducer.user,
        email: authReducer.email,
        password: authReducer.password,
        isAuth: authReducer.isAuth,
        openModal: authReducer.openModal,
        openMenu: headerReducer.openMenu,
        openDrawer: headerReducer.openDrawer,
      };
    },
  );
  //menu user avatar
  const handleClickMenu = (event) => {
    dispatch(setMenu(event.currentTarget));
  };
  const handleCloseMenu = () => {
    dispatch(setMenu(null));
  };
  //modal authorization
  const handleOpen = () => {
    dispatch(setModal(true));
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };

  const makeLogout = () => {
    dispatch(logout());

    dispatch(setMenu(null));
  };
  const setOpenDrawer = () => {
    dispatch(setDrawer(true));
  };
  const setCloseDrawer = () => {
    dispatch(setDrawer(false));
  };

  console.log(user);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            onClick={setOpenDrawer}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={openMenu}
            keepMounted
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}>
            <Link to={'/Account'} onClick={handleCloseMenu} className={classes.link}>
              <MenuItem>My account</MenuItem>
            </Link>
            <MenuItem onClick={makeLogout} className={classes.link}>
              Logout
            </MenuItem>
          </Menu>
          {isAuth ? (
            <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="300px">
              <Box margin="0 10px">
                <Typography variant="body2">{user.email}</Typography>
              </Box>
              {user.avatar ? (
                <CardMedia
                  width="100%"
                  height="100%"
                  component="img"
                  image={`${serverURL}/${user.avatar}`}
                  onClick={handleClickMenu}
                  className={classes.avatar}></CardMedia>
              ) : (
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.avatar}
                  onClick={handleClickMenu}
                />
              )}
            </Box>
          ) : (
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <ModalDrawer setCloseDrawer={setCloseDrawer} openDrawer={openDrawer} classes={classes} />
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

export default Header;
