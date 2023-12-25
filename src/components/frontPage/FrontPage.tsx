import { Box } from '@mui/material'
import Home from './Home'
import { Element } from 'react-scroll'

import ContactMe from './ContactMe'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Footer from '../header/Footer'

const FrontPage: React.FC = () => {
  return (
    <Box className='frontpage cover'>
      <Element name='home'>
        {' '}
        <Home />
      </Element>
      <Element name='about'>
        {' '}
        <About />
      </Element>
      <Element name='skills'>
        {' '}
        <Skills />
      </Element>
      <Element name='projects'>
        {' '}
        <Projects />
      </Element>
      <Element name='contact-me'>
        {' '}
        <ContactMe />
      </Element>
      <Footer />
    </Box>
  )
}

export default FrontPage
