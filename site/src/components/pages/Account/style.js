import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
  avatarBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  file: {
    display: 'none',
  },
  label: {
    cursor: 'pointer',
  },
});
