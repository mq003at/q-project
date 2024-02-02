import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppSelector } from './hooks/reduxHook'
import { ReactNotifications } from 'react-notifications-component'

import FrontPage from './components/frontPage/FrontPage'
import Error from './components/frontPage/Error'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Header } from './components/header/Header'
import { Box } from '@mui/material'

function App() {
  const colors = useAppSelector((store) => store.userReducer.colors);

  return (
    <div className='App'>
      <BrowserRouter>
          <ReactNotifications />
          <Header />
          <Box className='content' sx={{ backgroundColor: colors.greyish}}>
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
