import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import logo from '../../assets/Q-logo-letter-green.png'
import HeaderBtn from './HeaderBtn'

import { HomeMiniOutlined, HomeOutlined, Menu } from '@mui/icons-material/'
import { Fragment } from 'react'

export const Header: React.FC = () => {
  return (
    <Fragment>
      {/* Toggle for the header */}
      <Button variant="contained" className='header-toggler'>
        <Menu />
      </Button>

      {/* Main header content */}
      <Box className='header wrapper'>
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
                <HeaderBtn section='home' icon={<HomeOutlined />} offset={'0'}>
                  Home
                </HeaderBtn>
                <HeaderBtn section='about' icon={<HomeOutlined />} offset={'200'}>
                  About Me
                </HeaderBtn>
                <HeaderBtn section='skills' icon={<HomeOutlined />} offset={'0'}>
                  Skills
                </HeaderBtn>
                <HeaderBtn section='projects' icon={<HomeOutlined />} offset={'0'}>
                  Projects
                </HeaderBtn>
                <HeaderBtn section='contact-me' icon={<HomeOutlined />} offset={'0'}>
                  Contact
                </HeaderBtn>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </Fragment>
  )
}
