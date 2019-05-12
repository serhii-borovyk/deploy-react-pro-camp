import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./redux/reducers";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const theme = createMuiTheme({
  // palette: {type: 'dark'},
  typography: {useNextVariants: true},
});

// @ts-ignore
const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...[thunk, promise]),
    __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);