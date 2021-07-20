import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/home/Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        {/* <Route path={'/shop'} exact component={Shop} />
        <Route path={'/shop/:id'} component={ProductPage} />
        <Route path={'/basket'} exact component={BasketPage} /> */}
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
