import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SortProduct({ classes, setSorting, sorting, setOpenModal }) {
  const makeSort = (event) => {
    const value = event.target.value;
    setSorting(value);
  };
  return (
    <>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <TextField
          id="outlined-adornment-amount"
          value={sorting}
          onChange={makeSort}
          label="Название продукта"
          type="text"
          variant="outlined"
        />
      </FormControl>
      <Button
        variant="contained"
        className={classes.orderButton}
        size="small"
        color="primary"
        onClick={setOpenModal}>
        Оформить заказ
      </Button>
    </>
  );
}

export default SortProduct;
