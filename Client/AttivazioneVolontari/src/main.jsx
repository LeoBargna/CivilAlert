import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './routes/login'
import Home from './routes/home'
import Account from './routes/account'
import Attivazione from './routes/attivazione'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: 'home',
    element: <Home/>
  },
  {
    path: 'attivazione',
    element: <Attivazione/>
  },
  {
    path: "account",
    element: <Account/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
