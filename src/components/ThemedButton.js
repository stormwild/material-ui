import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import ThemeContext from './ThemeContext'

const ThemedButton = ({ variant, color, children }) => {
  const themeColor = useContext(ThemeContext)
  return <Button {...{variant, color }} style={ { backgroundColor: themeColor } }>{ children }</Button>
}

export default ThemedButton;
