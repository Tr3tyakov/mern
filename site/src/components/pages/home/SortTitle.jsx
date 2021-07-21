import React from 'react';
import Assortment from './Assortment/Assortment';
import AddOrder from './Assortment/CurrentProduct';
function SortTitle({ page }) {
  switch (page) {
    case 'История':
      return <h1>История</h1>;
    case 'Добавить заказ':
      return <AddOrder />;
    case 'Ассортимент':
      return <Assortment />;
    default:
      return <h1>Обзор</h1>;
  }
}

export default SortTitle;
