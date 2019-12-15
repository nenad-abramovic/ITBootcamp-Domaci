import React from 'react';
import './App.css';
import { Header } from './layout/header';
import { Content } from './layout/content';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: lightGreen,
      type: 'dark'
    }
  });
  

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
      >
        <Header />
        <Content />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
