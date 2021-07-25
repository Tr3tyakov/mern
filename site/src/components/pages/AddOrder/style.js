import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  title: {
    margin: '0 0 20px',
    width: '100%',
  },
  root: {
    maxWidth: 265,
    margin: '6px',
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
  },
  flex: {
    display: 'flex',
    margin: '0 0 30px 0',
  },
  btn: {
    margin: '0 0 0 20px',
    width: '200px',
  },
  count: {
    width: '80px',
  },
  qtyBtn: {
    margin: '0 10px',
    width: '',
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
});
