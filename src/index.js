import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reportWebVitals from './tools/reportWebVitals';
import reducers from './Components/redux/reducers';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />{' '}
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
