import React from 'react';
import { ThemeProvider, Grid } from '@material-ui/core'
import DataPage from './components/DataPage'

const App = () => {

  return (
    <ThemeProvider>
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <DataPage />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
