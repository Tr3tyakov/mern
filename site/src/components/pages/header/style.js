import makeStyles from '@material-ui/styles/makeStyles';
export const useStyles = makeStyles({
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
  flexDrawer: {
    width: '250px',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    backgroundColor: 'white',
    boxShadow: ' 0 5px 5px gray',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },

  drawerPaper: {
    width: '280px',
  },
  drawer: {
    width: '280px',
    flexShrink: 0,
  },
  flex: {
    margin: '102px 0 0 0',
    display: 'flex',
  },
  backdrop: {
    zIndex: 1222,
    color: '#fff',
  },
});
