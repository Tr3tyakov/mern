import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { store } from './components/reducers/rootReducer';
import { Provider } from 'react-redux';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#4caf50',
      contrastText: 'white',
    },
  },
  margin: {
    default: '20px 0',
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root'),
);
