import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks/reduxHook'
import { ReactNotifications } from 'react-notifications-component'

import FrontPage from './components/frontPage/FrontPage'
import Error from './components/frontPage/Error'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Header } from './components/header/Header'
import { Box, ThemeProvider } from '@mui/material'

function App() {
  const theme = useAppSelector((store) => store.userReducer.currentTheme);

  return (
    <div className='App'>
      <BrowserRouter>
          <ReactNotifications />
          <Header />
          <Box className='content'>
            <Routes>
              <Route path='/' element={<FrontPage />} />
              <Route path='/home' element={<FrontPage />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
