import React from 'react';
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Modal,
  Fade,
  ListItem,
  TextField,
  Backdrop,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { setAssortment } from '../../../reducers/actions/actions';
import { Link } from 'react-router-dom';

const arrayTitle = ['Напитки', 'Гамбургеры'];

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '100px',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '600px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
  },

  titleBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  title: {
    margin: '0 auto 10px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  formButton: {
    marginTop: 'auto',
  },
  textField: {
    width: '100%',
    margin: theme.margin.default,
  },
  currentProduct: {
    width: '100%',
    display: 'flex',
    margin: '10px 0',
  },
  assortmentItem: {
    flex: 'auto',
    textDecoration: 'none',
  },
  assortmentButton: {
    flex: 0,
    margin: '0 0 0 10px',
  },
}));

function Assortment() {
  const dispatch = useDispatch();
  const inputAssortment = useSelector((productReducer) => productReducer.inputAssortment);
  const [modal, setModal] = React.useState(false);
  const [errors, setErrors] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const validationCategory = (event) => {
    const value = event.target.value;
    const check = RegExp(/\d/gi).test(value);
    if (!check) {
      setErrors(false);
      return dispatch(setAssortment(value));
    }
    setErrors(true);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.titleBlock}>
        <Typography variant="h4" className={classes.title}>
          Категории
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Добавить Категории
        </Button>
      </div>
      <Modal
        className={classes.modal}
        open={modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={modal}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="on">
              <Typography variant="h5">Введите название категории:</Typography>
              <TextField
                label="Название категории"
                className={classes.textField}
                value={inputAssortment}
                error={errors}
                helperText={errors && 'В категории не должно быть цифр'}
                variant="filled"
                onChange={validationCategory}
              />

              <Button variant="contained" color="primary" fullWidth className={classes.formButton}>
                Добавить категорию
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>

      <Grid item xs={12}>
        {arrayTitle.map((element, index) => {
          return (
            <div className={classes.currentProduct} key={index}>
              <Link to={`/assortment/${element}`} className={classes.assortmentItem}>
                <Paper>
                  <ListItem button>
                    <ListItemText primary={element} />
                  </ListItem>
                </Paper>
              </Link>
              <Button variant="outlined" color="primary" className={classes.assortmentButton}>
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Assortment;