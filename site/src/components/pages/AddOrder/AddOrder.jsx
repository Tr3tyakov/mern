import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../reducers/actions/asyncCategoryActions';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
function AddOrder() {
  const dispatch = useDispatch();
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(getCategory());
  }, []);
  const { isLoading, category } = useSelector(({ categoryReducer, authReducer }) => {
    return {
      isLoading: authReducer.isLoading,
      category: categoryReducer.category,
    };
  });

  return (
    <Container>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.products}>
        {category &&
          category.map((element) => {
            return (
              <Link
                className={classes.link}
                to={{ pathname: `/add order/${element.title}`, state: { element } }}
                key={element._id}>
                <Card className={classes.root}>
                  <CardHeader title={element.title} />
                </Card>
              </Link>
            );
          })}
      </div>
    </Container>
  );
}

export default AddOrder;
