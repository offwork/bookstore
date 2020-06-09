import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './stores/store';

import "./styles.scss";
import App from './App';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider> ,
  document.getElementById('app')
);
