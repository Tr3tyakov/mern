import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  CardMedia,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import Categories from '../Categories/Categories';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../../reducers/actions/actions';
import { createProduct } from '../../../reducers/actions/asyncProductActions';

const useStyles = makeStyles({
  container: {
    marginTop: '100px',
  },
  inputFile: {
    display: 'none',
  },
  uploadImg: {
    height: '100%',
    width: '400px',
    objectFit: 'cover',
    borderRadius: '5px',
    overflow: 'hidden',
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
  flex: {
    display: 'flex',
  },
  btns: {
    margin: '10px 0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function CurrentProduct() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();

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
    console.log(2);
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
        <Categories />
      </Container>
    </>
  );
}

export default CurrentProduct;
