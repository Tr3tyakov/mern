import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProducts } from '../../reducers/actions/asyncProductActions';
import { increaseCounter, decreaseCounter, setOrder } from '../../reducers/actions/actions';
import ModalOrder from './ModalOrder';

function CurrentOrder() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  React.useEffect(() => {
    dispatch(getCurrentProducts(location.state.element.title));
  }, []);
  const { product, qty, order, count, cost } = useSelector(({ productReducer }) => {
    return {
      product: productReducer.product,
      qty: productReducer.qty,
      order: productReducer.order,
      count: productReducer.count,
      cost: productReducer.cost,
    };
  });

  const [modal, setModal] = React.useState(false);

  const increase = (value) => {
    dispatch(increaseCounter(value));
  };
  const decrease = (value) => {
    dispatch(decreaseCounter(value));
  };
  const addOrder = (name, count, cost) => {
    dispatch(setOrder(name, count, cost));
  };
  const setOpenModal = () => {
    setModal(true);
  };
  const setCloseModal = () => {
    setModal(false);
  };
  return (
    <Container>
      {product.length ? (
        <>
          <div className={classes.flex}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <TextField
                id="outlined-adornment-amount"
                // value={cost}
                // onChange={validationCost}
                label="Название продукта"
                type="text"
                variant="outlined"
              />
            </FormControl>
            <Button
              variant="contained"
              className={classes.btn}
              size="small"
              color="primary"
              onClick={setOpenModal}>
              Сделать заказ
            </Button>
            <ModalOrder
              modal={modal}
              setCloseModal={setCloseModal}
              order={order}
              classes={classes}
              count={count}
              cost={cost}
            />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell align="center" variant="head">
                    Стоимость
                  </TableCell>
                  <TableCell align="center">Количество</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((element) => {
                  return (
                    <TableRow key={element.name}>
                      <TableCell component="th" scope="row">
                        {element.name}
                      </TableCell>
                      <TableCell align="center">
                        {qty[element._id]?.cost || element.cost} руб.
                      </TableCell>
                      <TableCell align="center">
                        <div className={classes.qty}>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            className={classes.qtyBtn}
                            onClick={() => increase(element)}>
                            <AddIcon />
                          </Button>
                          <TextField
                            type="number"
                            variant="standard"
                            className={classes.count}
                            value={qty[element._id]?.count || 1}></TextField>
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            disabled={
                              qty[element._id] === undefined || qty[element._id]?.count === 1
                            }
                            className={classes.qtyBtn}
                            onClick={() => decrease(element)}>
                            <RemoveIcon />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          onClick={() =>
                            addOrder(element.name, qty[element._id]?.count, qty[element._id]?.cost)
                          }>
                          Добавить
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography variant="h4">В данной категории нет товаров</Typography>
      )}
    </Container>
  );
}

export default CurrentOrder;
