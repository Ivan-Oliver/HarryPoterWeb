// import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import  Router  from '../src/containers/router'
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
  );
}

export default App;
