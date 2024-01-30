import { Box } from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHook'

const About: React.FC = () => {
  const colors = useAppSelector(store => store.userReducer.colors);
  const currentTheme = useAppSelector((store) => store.userReducer.currentTheme)

  const [state, setState] = useState<number>(0)
  
  return (
    <Box className='about section' id='about'>
      <Box className='about wrapper-box' sx={{ backgroundColor: colors.slayout2, color: colors.main }}>
        <Box className={`about title ${currentTheme}`}>
          <Box className={`sub-title upper ${currentTheme}`}>INFO ABOUT</Box>
          <Box className='title-options'>
            <Box className={`main-title ${state === 0 ? 'active' : ''}`} onClick={() => setState(0)} sx={{ color: colors.slayout3 }}>
              MYSELF
            </Box>
            <Box className={`main-title ${state === 1 ? 'active' : ''}`} onClick={() => setState(1)} sx={{ color: colors.slayout3 }}>
              MY INTEREST
            </Box>
          </Box>
          <Box className={`sub-title lower ${currentTheme}`}>INFO ABOUT</Box>
        </Box>
        {state === 0 ? (
          <Box className='about details'>
            I'm a front-end web developer with a background in information technology at{' '}
            <span className='school'>Centria University</span> and <span className='school'>Integrify Bootcamp</span>. My 4 years
            of IT experience has given me a strong foundation for web development and building complex solutions. I am passionate
            about coding and solving problems through code, and I am excited to work alongside other amazing programmers. With my
            hardworking nature, I am confident that I could make a significant contribution to any organization I join!
          </Box>
        ) : (
          <Box className='about details'>
            <Box className='sub-details' sx= {{ color: colors.special }}>I have a very cute pet</Box>
            <Box className='mini-details'>He is an energetic chihuahua that always greets me when I come back to Vietnam.</Box>
            <Box className='sub-details' sx= {{ color: colors.special }}>In my free time</Box>
            <Box className='mini-details'>I watch movies, read books and play a lot of video games.</Box>
            <Box className='mini-details'>
              Currently? Reading Demian, maybe Wuthering Heights after that. Movies these days are kinda bad so I spend more time
              on books.
            </Box>
            <Box className='sub-details' sx= {{ color: colors.special }}>Anything else?</Box>
            <Box className='mini-details'>
              I cook and hangout with my friends on Discord. I really love cooking, but I am lazy whenever I have to wash the
              dishes.
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default About
