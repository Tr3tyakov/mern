import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../reducers/actions/asyncCategoryActions';
import { useStyles } from './style';
import { Link } from 'react-router-dom';

function AddOrder() {
  const dispatch = useDispatch();
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(getCategory());
  }, []);
  const category = useSelector(({ categoryReducer }) => categoryReducer.category);

  return (
    <Container>
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
                  <CardMedia
                    className={classes.media}
                    image="https://pmdn.sokolov.io/pics/10/DF/481AE34C6D7DFE877F10081C0C48.jpg"
                  />
                </Card>
              </Link>
            );
          })}
      </div>
    </Container>
  );
}

export default AddOrder;
