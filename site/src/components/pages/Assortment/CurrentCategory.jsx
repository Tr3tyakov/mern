import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  CardMedia,
  FormControl,
  IconButton,
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Product from './Product';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProduct, getCurrentProducts } from '../../reducers/actions/asyncProductActions';
import { useStyles } from './style';
import { useSnackbar } from 'notistack';
function CurrentProduct() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  React.useEffect(() => {
    dispatch(getCurrentProducts(location.state.title));
  }, []);

  const [file, setfile] = React.useState('');
  const [errors, setErrors] = React.useState({
    input: false,
    cost: false,
  });
  const [title, setTitle] = React.useState('');
  const [cost, setCost] = React.useState('');

  const createFile = (e) => {
    let url = URL.createObjectURL(e.target?.files[0]);
    setfile(url);
  };

  const validationProductInput = (event) => {
    const value = event.target.value;
    const check = RegExp(/^\d/).test(value);
    setTitle(event.target.value);
    if (check) {
      return setErrors({ ...errors, input: true });
    }
    setErrors({ ...errors, input: false });
  };

  const validationCost = (event) => {
    const value = event.target.value;
    const check = RegExp(/^0/).test(value);
    setCost(value);
    if (check) {
      return setErrors({ ...errors, cost: true });
    }
    setErrors({ ...errors, cost: false });
  };
  const makeProduct = () => {
    if (title !== '' && cost !== '' && file !== '') {
      return dispatch(createProduct(title, file, cost, location.state.title));
    }

    enqueueSnackbar('Ошибка при создании, поля не заполнены', { variant: 'error' });
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div>
          <Typography variant="h4" gutterBottom>
            Добавить продукт
          </Typography>
        </div>
        <div className={classes.order}>
          <div>
            <TextField
              className={classes.title}
              label="Название продукта"
              error={errors.input}
              value={title}
              helperText={errors.input && 'Некорректное название продукта'}
              onChange={validationProductInput}
            />
            <div className={classes.flex}>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField
                  id="outlined-adornment-amount"
                  value={cost}
                  onChange={validationCost}
                  label="Цена продукта"
                  type="number"
                  variant="outlined"
                  error={errors.cost}
                  helperText={errors.cost && 'Некорректная цена продукта'}
                />
              </FormControl>
            </div>
            <div className={classes.btns}>
              <Button variant="contained" onClick={makeProduct}>
                Добавить продукт
              </Button>
              <TextField
                className={classes.inputFile}
                id="button-file"
                multiple
                type="file"
                component="span"
                onChange={createFile}
              />

              <label htmlFor="button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </div>

          {file && (
            <CardMedia component="img" className={classes.uploadImg} image={file}></CardMedia>
          )}
        </div>
      </Container>
      <Container maxWidth="lg">
        <Product classes={classes} />
      </Container>
    </>
  );
}

export default CurrentProduct;
