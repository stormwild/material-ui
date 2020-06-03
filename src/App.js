import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThemeContext from './components/ThemeContext';
import ThemedButton from './components/ThemedButton';
import AppBar from './components/AppBar';

const App = () => {
  const color = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={color}>
      <div className='App'>
        <AppBar />
        <Typography>Hello Material</Typography>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
        <ThemedButton variant='contained' color='secondary'>Themed Buttony</ThemedButton>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
