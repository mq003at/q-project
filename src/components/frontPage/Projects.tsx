import { Box, Button, Link, Typography } from '@mui/material'

import SprWeb from '../../assets/spr-web-1.png'
import AcaciaWeb from '../../assets/acacia-web-2.png'
import MaidoWeb from '../../assets/maido-web-1.png'
import BussinessCardWeb from '../../assets/bussiness-card.png'
import { useAppSelector } from '../../hooks/reduxHook'

const Project: React.FC = () => {
  const colors = useAppSelector((store) => store.userReducer.colors)
  const currentTheme = useAppSelector((store) => store.userReducer.currentTheme)
  return (
    <Box className='projects section' id='projects'>
      <Box className='projects wrapper-box' sx={{ backgroundColor: colors.slayout2, color: colors.main }}>
        <Box className={`projects title ${currentTheme}`}>
          <Box className={`sub-title upper ${currentTheme}`}>MY PRECIOUS</Box>
          <Box className='title-options'>
            <Box className='main-title' sx={{ color: colors.slayout3 }}>
              PROJECTS
            </Box>
          </Box>
          <Box className={`sub-title lower ${currentTheme}`}>MY PRECIOUS</Box>
        </Box>
        <Box className='projects details'>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={AcaciaWeb} alt='Acacia Online Shopping'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3' sx={{ color: colors.special }}>
                Online Shopping With Acacia
              </Typography>
              <Typography variant='h4' sx={{ color: colors.main }}>
                Technology:{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  React
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  {' '}
                  Typescript
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  ASP.Net
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  Azure
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  MongoDB
                </Box>
              </Typography>
              <ul>
                <li>
                  <Typography variant='subtitle2'>
                    An e-commerce website for displaying goods and the customers can order from it.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    The website uses ASP.NET with MongoDB as backend to handle all requests and deployed using Docker and
                    Microsoft Azure.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    The website is made by a collaboration with many talented developers using Google Workspace, Zoom and Slack.
                  </Typography>
                </li>
              </ul>
              <Box className={`project navi ${currentTheme}`}>
                <Button
                  href='https://github.com/mq003at/fs-13-only-frontend'
                  style={{ width: '8rem', color: colors.slayout3 }}
                  className='project-link'
                >
                  Repo
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={SprWeb} alt='SPR Portal'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3' sx={{ color: colors.special }}>
                SPR-Kirpis Portal
              </Typography>
              <Typography variant='h4' sx={{ color: colors.main }}>
                Technology:{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  React
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  {' '}
                  Firebase
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  Express
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  AWS Beanstalk
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  Java
                </Box>
              </Typography>
              <ul>
                <li>
                  <Typography variant='subtitle2'>
                    A portal site to monitor and manage employees in real time and provide assistance to manager.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    Including an Android Application coded in Java to monitor the employees status in realtime with communications
                    between managers and employers.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    Asisting manager with their reports using AWS Beanstalk to communicate with other services.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    Result: reducing managers' workload and increasing productivity by 50%.
                  </Typography>
                </li>
              </ul>
              <Box className={`project navi ${currentTheme}`}>
                <Button
                  href='https://github.com/mq003at/spr-web'
                  style={{ width: '7rem', color: colors.slayout3 }}
                  className='project-link'
                >
                  Repo
                </Button>
                <Button
                  href='https://spr-kirppis-kok.web.app/'
                  style={{ width: '7rem', color: colors.slayout3 }}
                  className='project-link'
                >
                  Live
                </Button>
                <Button
                  href='https://github.com/mq003at/SPR-Checkin'
                  style={{ width: '7rem', color: colors.slayout3 }}
                  className='project-link'
                >
                  App
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={BussinessCardWeb} alt='SPR Portal'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3' sx={{ color: colors.special }}>
                Bussiness Card
              </Typography>
              <Typography variant='h4' sx={{ color: colors.main }}>
                Technology:{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  React
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  {' '}
                  Bootstrap
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  Netlify
                </Box>
              </Typography>
              <ul>
                <li>
                  <Typography variant='subtitle2'>
                    A simple React site to showcase my ability and used as my portfolio last year.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>
                    Embedded with Bootstrap with advanced CSS Grid and Flexbox to make the website more interractive
                  </Typography>
                </li>
              </ul>
              <Box className={`project navi ${currentTheme}`}>
                <Button href='https://github.com/mq003at/business-info'  style={{ width: '8rem', color: colors.slayout3 }} className='project-link'>
                  Repo
                </Button>
                <Button href='https://business-info.netlify.app/'  style={{ width: '8rem', color: colors.slayout3 }} className='project-link'>
                  Live
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={MaidoWeb} alt='Maido Blog Page'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3' sx={{ color: colors.special }}>
                Maido Blog
              </Typography>
              <Typography variant='h4' sx={{ color: colors.main }}>
                Technology:{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  Jquery
                </Box>
                ,{' '}
                <Box className='tech-special' sx={{ color: colors.slayout3 }}>
                  {' '}
                  Netlify
                </Box>
                ,{' '}
              </Typography>
              <ul className={`list ${currentTheme}`}>
                <li>
                  <Typography variant='subtitle2'>
                    A replica site of Maido webpage to test my CSS skills, with animation and alignments.
                  </Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>Ultilize SCSS and keyframe to write complex styling codes.</Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>Hosted using Github.</Typography>
                </li>
              </ul>
              <Box className={`project navi ${currentTheme}`}>
                <Button href='https://github.com/mq003at/fs13-CSS-SASS/'  style={{ width: '8rem', color: colors.slayout3 }} className='project-link'>
                  Repo
                </Button>
                <Button
                  href='https://mq003at.github.io/mq003at.github.io-css-sass/'
                  style={{ width: '8rem', color: colors.slayout3 }}                  className='project-link'
                >
                  Live
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Project
