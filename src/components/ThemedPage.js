import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThemedButton from './ThemedButton';
import AppBar from './components/AppBar';

const ThemedPage = () => {
  return (
    <div className='App'>
      <AppBar />
      <Typography>Hello Material</Typography>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <ThemedButton variant='contained' color='secondary'>
        Themed Buttony
      </ThemedButton>
    </div>
  );
};

export default ThemedPage;
