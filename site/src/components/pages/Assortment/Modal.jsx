import React from 'react';
import {
  Typography,
  Button,
  Paper,
  Modal,
  Fade,
  TextField,
  Backdrop,
  Container,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../reducers/actions/asyncCategoryActions';

function AssortmentModal({ modal, handleClose, classes }) {
  const dispatch = useDispatch();
  const [inputAssortment, setInputAssortment] = React.useState('');
  const [errors, setErrors] = React.useState(false);

  const validationCategory = (event) => {
    const value = event.target.value;
    const check = RegExp(/\d/gi).test(value);
    if (!check) {
      setErrors(false);

      return setInputAssortment(value);
    }
    setErrors(true);
  };

  const makeCategory = () => {
    if (!errors && inputAssortment !== '') {
      handleClose();
      dispatch(createCategory(inputAssortment));
      return setInputAssortment('');
    }
  };
  return (
    <Container maxWidth="md">
      <Modal
        open={modal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={modal}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <Typography variant="h5" gutterBottom>
                Введите название категории:
              </Typography>
              <TextField
                label="Название категории"
                className={classes.textField}
                value={inputAssortment}
                error={errors}
                helperText={errors && 'В категории не должно быть цифр'}
                variant="filled"
                onChange={validationCategory}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.formButton}
                onClick={makeCategory}>
                Добавить категорию
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
}

export default AssortmentModal;
