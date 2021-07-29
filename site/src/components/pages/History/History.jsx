import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { getOrder } from '../../reducers/actions/asyncOrderAction';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './style';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CurrentOrderModal from './CurrentOrderModal';
import Filters from './Filters';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
function History() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector(({ orderReducer, authReducer }) => {
    return {
      orders: orderReducer.orders,
      isLoading: authReducer.isLoading,
    };
  });
  const [filter, setFilter] = React.useState(false);
  const [size, setSize] = React.useState(1);
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [orderNumber, setOrderNumber] = React.useState('');
  const [orderModal, setOrderModal] = React.useState({
    id: '',
  });
  React.useEffect(() => {
    dispatch(getOrder(size));
  }, [size]);

  const filterOrders = React.useMemo(
    () =>
      orders.filter((element) =>
        orderNumber !== ''
          ? element.order === +orderNumber
          : startDate !== ''
          ? new Date(element.data).getTime() > new Date(startDate).getTime()
          : endDate !== ''
          ? new Date(element.data).getTime() > new Date(startDate).getTime()
          : orders,
      ),
    [orderNumber, orders, startDate, endDate],
  );
  const filterContainer = () => {
    setFilter(!filter);
  };
  const openModalOrder = (elementId) => {
    setOrderModal({ ...orderModal, id: elementId });
  };
  const closeModalOrder = () => {
    setOrderModal({ ...orderModal, id: '' });
  };
  const increaseSize = () => {
    setSize(size + 3);
  };
  const changeOrderNumber = (event) => {
    const value = event.target.value;
    setOrderNumber(value);
  };

  const changeStartDate = (event) => {
    const value = event.target.value;
    setStartDate(value);
  };
  const changeEndDate = (event) => {
    const value = event.target.value;
    setEndDate(value);
  };

  return (
    <Container>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.flex}>
        <Typography variant="h6"> История заказов</Typography>
        <Button
          variant="contained"
          color={filter ? 'secondary' : 'primary'}
          onClick={filterContainer}>
          <FilterListIcon />
        </Button>
      </div>
      {filter ? (
        <Filters
          orderNumber={orderNumber}
          changeOrderNumber={changeOrderNumber}
          startDate={startDate}
          changeStartDate={changeStartDate}
          endDate={endDate}
          changeEndDate={changeEndDate}
        />
      ) : (
        ''
      )}
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Номер заказа</TableCell>
              <TableCell align="center">Дата</TableCell>
              <TableCell align="center">Сумма</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.tbody}>
            {filterOrders.map((element) => {
              return (
                <TableRow key={element._id}>
                  <TableCell component="th" scope="row">
                    {element.order}
                  </TableCell>
                  <TableCell align="center">
                    {element && new Date(element.data).toLocaleString()}
                  </TableCell>
                  <TableCell align="center">{element.fullPrice} руб.</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={() => openModalOrder(element._id)}>
                      <FormatListBulletedIcon />
                    </Button>
                    <CurrentOrderModal
                      orderModal={orderModal}
                      closeModalOrder={closeModalOrder}
                      classes={classes}
                      products={element.products}
                      element={element}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className={classes.more}>
          <Button variant="outlined" color="primary" onClick={increaseSize}>
            Еще
          </Button>
        </div>
      </TableContainer>
    </Container>
  );
}

export default History;
