import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import Pagina404 from './pages/Pagina404';
import PaginaDefault from './components/PaginaDefault';

const Router = () => (
  <BrowserRouter>
    <PaginaDefault>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/board" component={Board} />
        <Route path="*" component={Pagina404} />
      </Switch>
    </PaginaDefault>
  </BrowserRouter>
);

export default Router;
