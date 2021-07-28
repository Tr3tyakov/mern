import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';

function CurrentOrderModal({ orderModal, closeModalOrder, classes, products, element }) {
  return (
    <Modal open={orderModal.id === element._id} onClose={closeModalOrder} className={classes.modal}>
      <Fade in={orderModal.id === element._id}>
        <Paper className={classes.paper}>
          <Typography> № заказа: {element.order}</Typography>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell align="center">Количество</TableCell>
                  <TableCell align="center">Цена</TableCell>
                </TableRow>
              </TableHead>

              <TableBody className={classes.tbody}>
                {products.map((elem) => {
                  return (
                    <TableRow key={elem._id}>
                      <TableCell component="th" scope="row">
                        {elem.name}
                      </TableCell>
                      <TableCell align="center">{elem.count} шт.</TableCell>
                      <TableCell align="center">{elem.cost} руб.</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography style={{ marginTop: '10px' }}>
            Сумма заказа: {element.fullPrice} руб.
          </Typography>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default CurrentOrderModal;
