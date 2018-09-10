 import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylus/reset.styl'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './container/Home/index'


ReactDOM.render(
<BrowserRouter>
  <div>
    <Route path='/' component={Home}></Route>
  </div>
</BrowserRouter>, document.getElementById('root'));
