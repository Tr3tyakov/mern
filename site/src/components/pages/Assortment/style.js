import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  inputFile: {
    display: 'none',
  },
  uploadImg: {
    height: '200px',
    width: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  paper: {
    width: '100%',
  },
  order: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: '0 0 20px',
    width: '100%',
  },
  form: {
    width: '100%',
    margin: '100%',
  },
  flex: {
    display: 'flex',
  },

  btns: {
    margin: '10px 0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  root: {
    maxWidth: 265,
    margin: '6px',
  },
  media: {
    height: '200px',
    width: '200px',
    objectFit: 'contain',
    margin: 'auto',
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  divider: {
    margin: '20px 0',
  },
  imageBox: {
    width: '100px',
    height: '100px',
    background: '#3f51b5',
  },
  button: {
    padding: 0,
  },
});
