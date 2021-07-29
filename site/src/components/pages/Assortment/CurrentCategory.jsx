import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Product from './Product';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
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

  const [file, setFile] = React.useState('');
  const [img, setImg] = React.useState('');
  const [errors, setErrors] = React.useState({
    input: false,
    cost: false,
  });
  const [title, setTitle] = React.useState('');
  const [cost, setCost] = React.useState('');

  const createFile = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      let img = URL.createObjectURL(event.target.files[0]);
      let file = event.target.files[0];
      setFile(file);
      setImg(img);
    }
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
      dispatch(createProduct(title, file, cost, location.state.title));
      setFile('');
      setTitle('');
      return setCost('');
    }

    enqueueSnackbar('Ошибка при создании, поля не заполнены', { variant: 'error' });
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Breadcrumbs aria-label="breadcrumb" gutterBottom>
          <Link color="inherit" href="/assortment">
            Assortment
          </Link>
          <Link
            color="textPrimary"
            href={`/assortment/${location.state.title}`}
            aria-current="page">
            {location.state.title}
          </Link>
        </Breadcrumbs>
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
            <CardMedia component="img" className={classes.uploadImg} image={img}></CardMedia>
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
