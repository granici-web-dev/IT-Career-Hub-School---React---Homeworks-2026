import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Typography, Button } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
    text: { 
      primary: '#000', 
      secondary: '#666' 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { 
      fontSize: '2rem', 
      fontWeight: 'bold' 
    },
    h2: { 
      fontSize: '1.5rem', 
      fontWeight: 'bold' 
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { 
      main: '#90caf9' 
    },
    secondary: {
      main: '#f48fb1' 
    },
    background: { 
      default: '#121212', 
      paper: '#1e1e1e' 
    },
    text: { 
      primary: '#fff', 
      secondary: '#aaa' 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { 
      fontSize: '2rem', 
      fontWeight: 'bold' 
    },
    h2: { 
      fontSize: '1.5rem', 
      fontWeight: 'bold' 
    },
  },
});

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Typography variant='h1' gutterBottom>{isDark ? 'Dark mode' : 'Light mode'}</Typography>
      <Button variant='contained' color='primary' onClick={() => setIsDark(!isDark)}>Toggle Theme</Button>
    </ThemeProvider>
  );
}

export default App;
