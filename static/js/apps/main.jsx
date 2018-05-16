import React from 'react';

import Index from './components/index';

import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const history = useRouterHistory(createHistory)({
    basename: '/base-path'
  });
ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Index } />
    </Router>,
    document.getElementById('app')

)
