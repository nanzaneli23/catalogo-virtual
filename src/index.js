import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Filmes from './Filmes';

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
        main: '#12a01c',
      },
      secondary: {
        main: '#962A2E',
      },
    },
  });


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/cadastro",
    element:<Cadastro/>
  },
  {
    path:"/filmes",
    element:<Filmes/>
  }
]);
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <RouterProvider router={router}/>
  </ThemeProvider>
);

