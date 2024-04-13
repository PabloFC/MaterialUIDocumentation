import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    terciary: {
      main: '#9c27b0',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
    {/* CssBaseline incluye una serie de reglas CSS que establecen valores para propiedades como la tipografía, los márgenes y los paddings, entre otros. Estas reglas son aplicadas a toda la aplicación y se aseguran de que todos los componentes tengan una apariencia consistente. */}
    <CssBaseline/> 
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
