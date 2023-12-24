import { Box, Link, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import { Email, CalendarMonth } from '@mui/icons-material/';

const ContactMe: React.FC = () => {
  return (
    <Box className='contact-me section'>
      <Box className='contact-me wrapper-box'>
        <Box className='contact-me title'>
          <Box className='sub-title upper'>SAY HELLO WITH</Box>
          <Box className='title-options'>
            <Box className='main-title'>CONTACT</Box>
          </Box>
          <Box className='sub-title lower'>SAY HELLO WITH</Box>
        </Box>
        <Box className='contact-me details'>
          <Box className='sub-details'>Get In Touch</Box>
          <Box className='mini-details'>
            <Box className='contact-types'>
            <Box className='contact-type-wrapper'>
                  <Box className='contact-icon-container email'><Email /></Box>
                  <Link href='mailto:quan.nguyen.suomea@gmail.com'>quan.nguyen.suomea@gmail.com</Link>
                  <Typography className='contact-type-text'>Email Me</Typography>
              </Box>
              <Box className='contact-type-wrapper'>
                  <Box className='contact-icon-container calendly'><CalendarMonth /></Box>
                  <Link href='https://calendly.com/quan-nguyen-suomea/30min'>Calendly</Link>
                  <Typography className='contact-type-text'>Schedule a 30 minutes meeting</Typography>
              </Box>
            </Box>
          </Box>
          <Box className='sub-details'>Contact Form</Box>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMe
