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
  Box,
  CardMedia,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../reducers/actions/asyncCategoryActions';
import IconButton from '@material-ui/core/IconButton';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';
import PanoramaIcon from '@material-ui/icons/Panorama';
function AssortmentModal({ modal, handleClose, classes }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [inputAssortment, setInputAssortment] = React.useState('');
  const [errors, setErrors] = React.useState({
    inputError: false,
    imageError: false,
  });
  const [uploadFile, setUploadFile] = React.useState({
    file: '',
    image: '',
  });
  const validationCategory = (event) => {
    const value = event.target.value;
    const check = RegExp(/\d/gi).test(value);
    setErrors({ ...errors, inputError: false });
    if (!check) {
      return setInputAssortment(value);
    }
    setErrors({ ...errors, inputError: true });
  };

  const makeCategory = () => {
    if (!errors.inputError && !errors.imageError && inputAssortment !== '' && uploadFile.file) {
      handleClose();
      dispatch(createCategory(inputAssortment, uploadFile.file));
      setInputAssortment('');
      setUploadFile({ ...uploadFile, image: '', file: '' });
      return;
    }
    if (!uploadFile.file) {
      setErrors({ ...errors, imageError: true });
      return enqueueSnackbar('Изображение не добавлено', { variant: 'error' });
    }
    setErrors({ ...errors, inputError: true });
    enqueueSnackbar('Заполните все поля', { variant: 'error' });
  };

  const changeFile = (event) => {
    if (event.target.files[0]) {
      const value = event.target.files[0];
      const image = URL.createObjectURL(value);
      setErrors({ ...errors, inputError: false, imageError: false });
      setUploadFile({ ...uploadFile, file: value, image });
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
              <Typography align="left" variant="h5" gutterBottom>
                Категория
              </Typography>
              <Box
                className={clsx({
                  [classes.imageBox]: true,
                  [classes.imageBoxError]: errors.imageError,
                })}>
                <Box className={classes.uploadBox}>
                  {uploadFile.image ? (
                    <CardMedia
                      width="100%"
                      height="100%"
                      component="img"
                      image={uploadFile.image}></CardMedia>
                  ) : (
                    <PanoramaIcon color="primary" fontSize="large" />
                  )}
                </Box>
                <Box display="flex" alignItems="center" marginX="10px" flex="1">
                  {uploadFile.image ? (
                    <Typography>Файл успешно загружен</Typography>
                  ) : (
                    <Typography variant="body2">Загрузите изображение для категории</Typography>
                  )}
                </Box>
                <Button className={classes.button} variant="contained" color="primary">
                  <label htmlFor="uploadImage" className={classes.label}>
                    {uploadFile.image ? <CheckIcon /> : <PhotoCamera />}
                  </label>
                </Button>
              </Box>
              <TextField
                label="Введите название категории"
                className={classes.textField}
                value={inputAssortment}
                error={errors.inputError}
                helperText={errors.inputError && 'В категории не должно быть цифр'}
                variant="filled"
                onChange={validationCategory}
              />
              <TextField
                id="uploadImage"
                type="file"
                className={classes.uploadImg}
                onChange={changeFile}
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
