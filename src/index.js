import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const reducers = {
  form: formReducer,
  clicks: function(state = {count: 0}, action) {
    if (action.type === 'CLICK') {
      return { count: state.count + 1};
    }
    return state;
  }
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
