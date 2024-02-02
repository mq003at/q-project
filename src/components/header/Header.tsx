import { AppBar, Box, Button, Container, Drawer, Toolbar } from '@mui/material'
import logo from '../../assets/Q-logo-letter-green.png'
import HeaderBtn from './HeaderBtn'

import { KeyboardReturn, HomeOutlined, KeyboardTab } from '@mui/icons-material/'
import { Fragment, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { changeTheme } from '../../redux/reducers/userReducer'

export const Header: React.FC = () => {
  const [isHide, setIsHide] = useState<boolean>(true)

  const colors = useAppSelector((store) => store.userReducer.colors);
  const currentTheme = useAppSelector((store) => store.userReducer.currentTheme);
  const dispatch = useAppDispatch();

  const switchTheme = () => {
    if (currentTheme === 'light') dispatch(changeTheme('dark'));
    else dispatch(changeTheme('light'));
  }

  const HeaderBar: React.FC = () => {
    return (
      <Box className={`header wrapper`}>
        <AppBar className='header appbar' position='fixed'>
          <Container className='container'>
            <Toolbar
              className='toolbar'
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
            >
              <Box
                className='main-logo wrapper'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <img src={logo} alt='placeholder-logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </Box>
              <Box className='header-buttons'>
                <HeaderBtn section='home' icon={<HomeOutlined />} offset={'0'} closeDrawer={() => setIsHide(true)}>
                  Home
                </HeaderBtn>
                <HeaderBtn section='about' icon={<HomeOutlined />} offset={'200'} closeDrawer={() => setIsHide(true)}>
                  About Me
                </HeaderBtn>
                <HeaderBtn section='skills' icon={<HomeOutlined />} offset={'0'} closeDrawer={() => setIsHide(true)}>
                  Skills
                </HeaderBtn>
                <HeaderBtn section='projects' icon={<HomeOutlined />} offset={'0'} closeDrawer={() => setIsHide(true)}>
                  Projects
                </HeaderBtn>
                <HeaderBtn section='contact-me' icon={<HomeOutlined />} offset={'0'} closeDrawer={() => setIsHide(true)}>
                  Contact
                </HeaderBtn>
                <Button className='header-btn' onClick={() => {switchTheme(); setIsHide(true)}}>
                  Switch Theme
                </Button>
              </Box>
              <Box className='header-hide wrapper'>
                <Button className={`header-hide hide-button`} onClick={() => setIsHide(true)} sx = {{ color: colors.main }}>
                  <KeyboardReturn />
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    )
  }

  return (
    <Fragment>
      {/* Toggle for the header */}
      <Button variant='contained' className={`header-toggler position-fixed`} onClick={() => setIsHide(false)} sx= {{ color: colors.sub, backgroundColor: colors.slayout }}>
        <KeyboardTab />
      </Button>

      {/* Main header content */}
      <Drawer  className='drawer' anchor='left' open={!isHide} onClose={() => setIsHide(true)} sx ={{ height: '100vh' }}>
        <HeaderBar />
      </Drawer>
    </Fragment>
  )
}
