import { Box, Link, Typography } from '@mui/material'
import ContactForm from './ContactForm'
import { Email, CalendarMonth } from '@mui/icons-material/';
import { useAppSelector } from '../../hooks/reduxHook';

const ContactMe: React.FC = () => {
  const colors = useAppSelector((store) => store.userReducer.colors)
  const currentTheme = useAppSelector((store) => store.userReducer.currentTheme)
  
  return (
    <Box className='contact-me section' id='contact-me'>
      <Box className='contact-me wrapper-box' sx={{ backgroundColor: colors.slayout2, color: colors.main }}>
        <Box className={`contact-me title ${currentTheme}`}>
          <Box className={`sub-title upper ${currentTheme}`}>SAY HELLO WITH</Box>
          <Box className='title-options'>
            <Box className='main-title' sx={{ color: colors.slayout3 }}>CONTACT</Box>
          </Box>
          <Box className={`sub-title lower ${currentTheme}`}>SAY HELLO WITH</Box>
        </Box>
        <Box className='contact-me details'>
          <Box className='sub-details' sx={{ color: colors.special }}>Get In Touch</Box>
          <Box className='mini-details'>
            <Box className='contact-types'>
            <Box className='contact-type-wrapper'>
                  <Box className='contact-icon-container email' sx={{ color: colors.slayout3 }}><Email /></Box>
                  <Link href='mailto:quan.nguyen.suomea@gmail.com' sx={{ color: colors.slayout3 }}>quan.nguyen.suomea@gmail.com</Link>
                  <Typography className='contact-type-text'>Email Me</Typography>
              </Box>
              <Box className='contact-type-wrapper'>
                  <Box className='contact-icon-container calendly' sx={{ color: colors.calend }}><CalendarMonth /></Box>
                  <Link href='https://calendly.com/quan-nguyen-suomea/30min' sx={{ color: colors.calend }}>Calendly</Link>
                  <Typography className='contact-type-text'>Schedule a 30 minutes meeting</Typography>
              </Box>
            </Box>
          </Box>
          <Box className='sub-details'  sx={{ color: colors.special }}>Contact Form</Box>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMe
