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

function ModalOrder({ modal, setCloseModal, order, classes, count, cost }) {
  return (
    <Modal open={modal} onClose={setCloseModal} className={classes.modal}>
      {order.length ? (
        <Fade in={modal}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <Typography variant="h5" gutterBottom>
                ОФОРМИТЬ ЗАКАЗ:
              </Typography>
              <TableContainer className={classes.tableContainer}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Название</TableCell>
                      <TableCell>Стоимость</TableCell>
                      <TableCell>Количество</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody className={classes.tbody}>
                    {order.map((element) => {
                      return (
                        <TableRow key={element.name}>
                          <TableCell component="th" scope="row">
                            {element.name}
                          </TableCell>
                          <TableCell align="center">{element.cost} руб.</TableCell>
                          <TableCell align="center">
                            <TextField
                              type="number"
                              variant="standard"
                              className={classes.count}
                              value={element.count}></TextField>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider className={classes.divider} />

              <div className={classes.total}>
                <Typography>Заказ на сумму: {cost} руб.</Typography>
                <Typography>Количество товара: {count} шт.</Typography>
              </div>

              <Divider className={classes.divider} />

              <Button variant="contained" color="primary" fullWidth>
                Оформить заказ
              </Button>
            </form>
          </Paper>
        </Fade>
      ) : (
        <Fade in={modal}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Ваш заказ пуст</Typography>
          </Paper>
        </Fade>
      )}
    </Modal>
  );
}

export default ModalOrder;
