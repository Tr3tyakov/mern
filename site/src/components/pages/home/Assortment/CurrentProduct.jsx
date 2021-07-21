import React from 'react';
import { Container, Typography, TextField, Button, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textField: {
    margin: '0 0 20px',
    width: '100%',
  },
});

function CurrentProduct() {
  const classes = useStyles();
  const [file, setfile] = React.useState(null);
  const [erorrs, setErrors] = React.useState(false);
  const [textField, setTextField] = React.useState('');

  const createFile = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setfile(url);
  };

  const validationProductInput = (event) => {
    const value = event.target.value;
    const check = RegExp(/\d/gi).test(value);
    setTextField(event.target.value);
    if (check) {
      return setErrors(true);
    }
    setErrors(false);
  };

  return (
    <Container maxWidth="lg">
      <div>
        <Typography variant="h4">Добавить заказ</Typography>
      </div>
      <div className={classes.order}>
        <div>
          <TextField
            className={classes.textField}
            label="Название продукта"
            error={erorrs}
            helperText={erorrs && 'Некорректное название продукта'}
            onChange={validationProductInput}
          />
          <TextField
            className={classes.inputFile}
            id="button-file"
            multiple
            type="file"
            onChange={createFile}
          />
          <label htmlFor="button-file">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Upload
            </Button>
          </label>
        </div>
        {file && <CardMedia component="img" className={classes.uploadImg} image={file}></CardMedia>}
      </div>
    </Container>
  );
}

export default CurrentProduct;
