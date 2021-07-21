import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/pages/header/Header';
import Assortment from './components/pages/home/Assortment/Assortment';
import CurrentProduct from './components/pages/home/Assortment/CurrentProduct';
import Home from './components/pages/home/Home';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/assortment'} exact component={Assortment} />
        <Route path={'/assortment/:id'} exact component={CurrentProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
