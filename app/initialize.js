import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import myApp from './reducers';

import MainLayout from 'scenes/MainLayout';
import Home from 'scenes/Home';
import {HomeMain} from 'scenes/Home/scenes';
import Paint from 'scenes/Paint';
import {PaintMain} from 'scenes/Paint/scenes';
import NotFound from 'scenes/NotFound';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// const store = createStore(counterApp, module.hot && module.hot.data && module.hot.data.counter || 0);
// let store = createStore(myApp, {count: 0});
let store = createStore(myApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({
  type: 'INIT',
  data: false
});

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#react_root').children).forEach(function(c) {
      c.remove()
    });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="home" activeClassName="active-link" component={Home}></Route>
        <Route path="Paint" activeClassName="active-link" component={Paint}>
          <IndexRoute component={PaintMain}></IndexRoute>
        </Route>
      </Route>
      <Route path="*" component={NotFound}></Route>
    </Router>
  </Provider>, document.querySelector('#react_root'));
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
