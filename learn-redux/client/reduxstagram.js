import React from 'react';

import {render} from 'react-dom';

// importing css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              {/* Will become childrren of Main component */}
              <IndexRoute component={PhotoGrid}></IndexRoute>
              <Route path="/view/:postId" component={Single}></Route>
          </Route>
      </Router>
    </Provider>
);

// two args, JSX + mounting point
render(
    router,
    document.getElementById('root')
);