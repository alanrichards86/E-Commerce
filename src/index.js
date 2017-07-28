import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>

      <Switch>
        <Route exact path='/' component={BaseLayout} />
      </Switch>

    </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
