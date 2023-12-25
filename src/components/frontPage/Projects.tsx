import { Box, Typography } from '@mui/material'

import SprWeb from '../../assets/spr-web-1.png'
import AcaciaWeb from '../../assets/acacia-web-2.png'
import MaidoWeb from '../../assets/maido-web-1.png'
import BussinessCardWeb from '../../assets/bussiness-card.png'

const Project: React.FC = () => {
  return (
    <Box className='projects section' id='projects'>
      <Box className='projects wrapper-box'>
        <Box className='projects title'>
          <Box className='sub-title upper'>MY PRECIOUS</Box>
          <Box className='title-options'>
            <Box className='main-title'>PROJECTS</Box>
          </Box>
          <Box className='sub-title lower'>MY PRECIOUS</Box>
        </Box>
        <Box className='projects details'>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={AcaciaWeb} alt='Acacia Online Shopping'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3'>Online Shopping With Acacia</Typography>
              <Typography variant='h4'>
                Technology: <span className='tech-special'>React</span>, <span className='tech-special'>Typescript</span>,{' '}
                <span className='tech-special'>ASP.Net</span>, <span className='tech-special'>Azure</span>,{' '}
                <span className='tech-special'>MongoDB</span>
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
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={SprWeb} alt='SPR Portal'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3'>SPR-Kirpis Portal</Typography>
              <Typography variant='h4'>
                Technology: <span className='tech-special'>React</span>, <span className='tech-special'>Firebase</span>,{' '}
                <span className='tech-special'>Express</span>, <span className='tech-special'>AWS Beanstalk</span>,{' '}
                <span className='tech-special'>Java</span>
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
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={BussinessCardWeb} alt='SPR Portal'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3'>Bussiness Card</Typography>
              <Typography variant='h4'>
                Technology: <span className='tech-special'>React</span>, <span className='tech-special'>Bootstrap</span>,{' '}
                <span className='tech-special'>Netlify</span>
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
            </Box>
          </Box>
          <Box className='project wrapper'>
            <Box className='project image'>
              <img src={MaidoWeb} alt='Maido Blog Page'></img>
            </Box>
            <Box className='project more-details'>
              <Typography variant='h3'>Maido Blog</Typography>
              <Typography variant='h4'>
                Technology: <span className='tech-special'>Jquery</span>, <span className='tech-special'>Netlify</span>,{' '}
              </Typography>
              <ul>
                <li>
                  <Typography variant='subtitle2'>A replica site of Maido webpage to test my CSS skills, with animation and alignments.</Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>Ultilize public API to poppulate the site's content.</Typography>
                </li>
                <li>
                  <Typography variant='subtitle2'>Hosted using Netlify and Firebase.</Typography>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Project
