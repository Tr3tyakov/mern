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
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useStyles } from './style';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProducts } from '../../reducers/actions/asyncProductActions';
import {
  setClearOrder,
  increaseCounter,
  decreaseCounter,
  setOrder,
  setClearQty,
} from '../../reducers/actions/actions';
import { createOrder } from '../../reducers/actions/asyncOrderAction';
import { useSnackbar } from 'notistack';
import ModalOrder from './ModalOrder';
import SortProduct from './SortProduct';

function CurrentOrder() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

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
  const [sorting, setSorting] = React.useState('');
  const [modal, setModal] = React.useState(false);
  const sortedItems = React.useMemo(
    () => product.filter((element) => element.name.toLowerCase().includes(sorting.toLowerCase())),
    [product, sorting],
  );
  const increase = (value) => {
    dispatch(increaseCounter(value));
  };

  const createOrderOnServer = () => {
    setModal(false);
    dispatch(createOrder(order, cost, count));
    dispatch(setClearQty());
    dispatch(setClearOrder());
  };
  const decrease = (value) => {
    dispatch(decreaseCounter(value));
  };
  const addOrder = (name, count, cost) => {
    dispatch(setOrder(name, count, cost));
    enqueueSnackbar(`${name} ?????? ?????????????? ???????????????? ?? ?????? ??????????`, { variant: 'success' });
  };
  const setOpenModal = () => {
    setModal(true);
  };
  const setCloseModal = () => {
    setModal(false);
  };
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" gutterBottom>
        <Link color="inherit" href="/add order">
          Add order
        </Link>
        <Link color="textPrimary" href={`/assortment/${location.state.title}`} aria-current="page">
          {location.state.element.title}
        </Link>
      </Breadcrumbs>
      {product.length ? (
        <>
          <div className={classes.flex}>
            <SortProduct classes={classes} setSorting={setSorting} setOpenModal={setOpenModal} />
            <ModalOrder
              modal={modal}
              setCloseModal={setCloseModal}
              order={order}
              classes={classes}
              count={count}
              cost={cost}
              sorting={sorting}
              createOrderOnServer={createOrderOnServer}
            />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>????????????????</TableCell>
                  <TableCell align="center" variant="head">
                    ??????????????????
                  </TableCell>
                  <TableCell align="center">????????????????????</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedItems.map((element) => {
                  return (
                    <TableRow key={element.name}>
                      <TableCell component="th" scope="row">
                        {element.name}
                      </TableCell>
                      <TableCell align="center">
                        {qty[element._id]?.cost || element.cost} ??????.
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
                          color="secondary"
                          onClick={() =>
                            addOrder(
                              element.name,
                              qty[element._id]?.count || 1,
                              qty[element._id]?.cost || element.cost,
                            )
                          }>
                          ????????????????
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
        <Typography variant="h4">?? ???????????? ?????????????????? ?????? ??????????????</Typography>
      )}
    </Container>
  );
}

export default CurrentOrder;
