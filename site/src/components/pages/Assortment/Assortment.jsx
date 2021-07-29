import React from 'react';
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  ListItem,
  Backdrop,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategory, deleteCurrentCategory } from '../../reducers/actions/asyncCategoryActions';

import AssortmentModal from './Modal';
const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    maxWidth: '400px',
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
    margin: '10px 0',
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
  backdrop: {
    zIndex: 1221,
    color: '#fff',
  },
});

function Assortment() {
  React.useEffect(() => {
    dispatch(getCategory());
  }, []);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  const { category, isLoading } = useSelector(({ categoryReducer, authReducer }) => {
    return {
      category: categoryReducer.category,
      isLoading: authReducer.isLoading,
    };
  });

  const handleClose = () => {
    setModal(false);
  };
  const handleOpen = () => {
    setModal(true);
  };
  const deleteThisCategory = (id) => {
    dispatch(deleteCurrentCategory(id));
  };
  return (
    <Container className={classes.container}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.titleBlock}>
        <Typography variant="h4" className={classes.title}>
          Категории
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Добавить Категорию
        </Button>
      </div>
      <AssortmentModal handleClose={handleClose} modal={modal} classes={classes} />

      <Grid item xs={12}>
        {category.map((element) => {
          console.log(element._id);
          return (
            <div className={classes.currentProduct} key={element._id}>
              <Link
                to={{ pathname: `/assortment/${element.title}`, state: { title: element.title } }}
                className={classes.assortmentItem}>
                <Paper>
                  <ListItem button>
                    <ListItemText primary={element.title} />
                  </ListItem>
                </Paper>
              </Link>
              <Button
                variant="outlined"
                color="primary"
                className={classes.assortmentButton}
                onClick={() => deleteThisCategory(element._id)}>
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
