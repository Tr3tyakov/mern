import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/pages/header/Header';
import Assortment from './components/pages/Assortment/Assortment';
import CurrentProduct from './components/pages/Assortment/CurrentCategory';
import AddOrder from './components/pages/AddOrder/AddOrder';
import Home from './components/pages/home/Home';
import CurrentOrder from './components/pages/AddOrder/CurrentOrder';
import History from './components/pages/History/History';
import { SnackbarProvider } from 'notistack';
import { checkAuth } from './components/reducers/actions/asyncAuthActions';
import { useDispatch } from 'react-redux';
import Account from './components/pages/Account/Account';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('Token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/assortment'} exact component={Assortment} />
          <Route path={'/assortment/:id'} exact component={CurrentProduct} />
          <Route path={'/account'} exact component={Account} />
          <Route path={'/add order'} exact component={AddOrder} />
          <Route path={'/add order/:id'} exact component={CurrentOrder} />
          <Route path={'/history'} exact component={History} />
        </Switch>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
