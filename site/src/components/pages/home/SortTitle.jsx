import React from 'react';
import Assortment from './Assortment';
function SortTitle({ page }) {
  switch (page) {
    case 'История':
      return <h1>История</h1>;
    case 'Добавить заказ':
      return <h1>Добавить заказ</h1>;
    case 'Ассортимент':
      return <Assortment />;
    default:
      return <h1>Обзор</h1>;
  }
}

export default SortTitle;
