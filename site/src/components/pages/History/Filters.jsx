import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Filters({
  orderNumber,
  changeOrderNumber,
  startDate,
  changeStartDate,
  endDate,
  changeEndDate,
}) {
  return (
    <div>
      <TextField
        color="primary"
        label="Номер заказа"
        variant="filled"
        margin="normal"
        value={orderNumber}
        onChange={changeOrderNumber}></TextField>
      <TextField
        color="primary"
        label="Начало"
        variant="filled"
        margin="normal"
        type="date"
        value={startDate}
        onChange={changeStartDate}
        InputLabelProps={{
          shrink: true,
        }}></TextField>
      <TextField
        color="primary"
        label="Конец"
        margin="normal"
        variant="filled"
        type="date"
        value={endDate}
        onChange={changeEndDate}
        InputLabelProps={{
          shrink: true,
        }}></TextField>
    </div>
  );
}

export default Filters;
