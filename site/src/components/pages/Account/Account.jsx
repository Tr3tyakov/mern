import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useSnackbar } from 'notistack';
import React from 'react';
import { changeInfo } from '../../reducers/actions/asyncAuthActions';
import { serverURL } from '../../utils/http/axios';
import { useStyles } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Account = () => {
  const classes = useStyles();
  const user = useSelector(({ authReducer }) => authReducer.user);

  React.useEffect(() => {
    if (user.avatar) {
      setUploadFile({ ...uploadFile, image: `${serverURL}/${user.avatar}` });
      setName(user.name.split(' ')[0]);
      setSecondName(user.name.split(' ')[1]);
    }
  }, [user]);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [uploadFile, setUploadFile] = React.useState({
    image: '',
    file: '',
  });
  const [name, setName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [age, setAge] = React.useState('');

  const changeFile = (event) => {
    if (event.target.files[0]) {
      const value = event.target.files[0];
      const image = URL.createObjectURL(value);
      setUploadFile({ ...uploadFile, image, file: value });
    }
  };

  const saveUserData = () => {
    if (name && secondName && age && uploadFile.file) {
      const fullName = `${name} ${secondName}`;
      dispatch(changeInfo(fullName, age, uploadFile.file));
      return;
    }
    enqueueSnackbar('Поля должны быть заполнены', { variant: 'error' });
  };

  return (
    <>
      <Container>
        <Box className={classes.avatarBox}>
          {uploadFile.image ? (
            <label htmlFor="AddFile" className={classes.label}>
              <CardMedia
                className={classes.avatar}
                component="img"
                image={uploadFile.image}></CardMedia>
            </label>
          ) : (
            <label htmlFor="AddFile" className={classes.label}>
              <Avatar className={classes.avatar} />
            </label>
          )}
          <TextField
            id="AddFile"
            className={classes.file}
            type="file"
            onChange={changeFile}></TextField>
        </Box>
        <Box display="flex" flexDirection="column" maxWidth="300px">
          <Box marginY="10px">
            <TextField
              variant="outlined"
              label="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}></TextField>
          </Box>
          <Box marginY="10px">
            <TextField
              variant="outlined"
              label="Введите фамилию"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}></TextField>
          </Box>
          <Box marginY="10px">
            <TextField
              variant="outlined"
              type="date"
              value={age}
              onChange={(e) => setAge(e.target.value)}></TextField>
          </Box>
        </Box>
        <Button variant="contained" onClick={saveUserData}>
          Сохранить
        </Button>
      </Container>
    </>
  );
};

export default Account;
