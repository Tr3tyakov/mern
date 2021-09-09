import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  title: {
    margin: '0 0 20px',
    width: '100%',
  },
  root: {
    maxWidth: 265,
    margin: '6px',
    // padding: '10px',
  },
  media: {
    margin: 'auto',
    height: '200px',
    width: '200px',
    objectFit: 'contain',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    width: '200px',
  },
  flex: {
    display: 'flex',
    margin: '0 0 30px 0',
  },

  formBtn: {
    margin: '0 10px',
    width: '100px',
  },
  btn: {
    marginLeft: 'auto',
    width: '200px',
  },
  count: {
    width: '50px',
  },
  qtyBtn: {
    margin: '0 10px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: '20px',
  },
  divider: {
    margin: '15px 0',
  },
  total: {
    padding: '0 15px',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  tableContainer: {
    height: '300px',
    overflow: 'auto',
  },
  makeOrder: {
    margin: '20px 0',
    display: 'flex',
  },
  orderButton: {
    margin: '0 10px',
  },
  backdrop: {
    zIndex: 1222,
    color: '#fff',
  },
  categoryTitle: {
    position: 'absolute',
    color: 'white',
    top: '50%',
    left: '50%',
    fontSize: '35px',
    fontWeight: 600,
    transform: 'translate(-50%,-50%)',
  },
});
