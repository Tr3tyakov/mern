import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteCurrentProduct } from '../../reducers/actions/asyncProductActions';
function Product({ classes }) {
  const dispatch = useDispatch();
  const product = useSelector(({ productReducer }) => productReducer.product);
  const [menu, setMenu] = React.useState({
    id: '',
    anchor: '',
  });

  const handleClick = (event, elementId) => {
    setMenu({ ...menu, id: elementId, anchor: event.currentTarget });
  };
  const closeMenu = () => {
    setMenu({ ...menu, id: null, anchor: null });
  };

  const deleteProduct = (id) => {
    setMenu({ ...menu, id: null, anchor: null });
    dispatch(deleteCurrentProduct(id));
  };

  return (
    <>
      <Typography variant="h4">Имеющийся продукт:</Typography>
      <Divider variant="fullWidth" className={classes.divider} />
      <div className={classes.products}>
        {product &&
          product.map((element) => {
            return (
              <Card className={classes.root} key={element._id}>
                <CardHeader
                  action={
                    <div>
                      <IconButton
                        aria-controls={element._id}
                        onClick={(e) => handleClick(e, element._id)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        className={classes.menu}
                        id={element._id}
                        anchorEl={menu.anchor}
                        open={element._id === menu.id}
                        onClose={closeMenu}>
                        <MenuItem onClick={closeMenu}>Изменить</MenuItem>
                        <MenuItem onClick={() => deleteProduct(element._id)}>Удалить</MenuItem>
                      </Menu>
                    </div>
                  }
                  title={element.name}
                  subheader={new Date(element.data).toLocaleString()}
                />
                <CardMedia
                  className={classes.media}
                  image="https://pmdn.sokolov.io/pics/10/DF/481AE34C6D7DFE877F10081C0C48.jpg"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together
                    with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Product;
