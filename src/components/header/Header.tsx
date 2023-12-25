import { AppBar, Box, Container, Toolbar } from '@mui/material'
import logo from '../../assets/Q-logo-letter-green.png'
import HeaderBtn from './HeaderBtn'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

export const Header: React.FC = () => {
  return (
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
              <HeaderBtn section='home' icon={<HomeOutlinedIcon />} offset={'0'}>
                Home
              </HeaderBtn>
              <HeaderBtn section='about' icon={<HomeOutlinedIcon />} offset={'2em'}>
                About Me
              </HeaderBtn>
              <HeaderBtn section='skills' icon={<HomeOutlinedIcon />} offset={'2em'}>
                Skills
              </HeaderBtn>
              <HeaderBtn section='projects' icon={<HomeOutlinedIcon />} offset={'15em'}>
                Projects
              </HeaderBtn>
              <HeaderBtn section='contact-me' icon={<HomeOutlinedIcon />} offset={'2em'}>
                Contact
              </HeaderBtn>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
