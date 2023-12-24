import { Box } from '@mui/material'
import { useState } from 'react'

import HTML from '../../assets/icon/html-5.svg'
import CSS from '../../assets/icon/css-3.svg'
import Javascript from '../../assets/icon/javascript.svg'
import React from '../../assets/icon/reactjs.svg'
import Typescript from '../../assets/icon/typescript-official.svg'
import Git from '../../assets/icon/git.svg'
import PHP from '../../assets/icon/php.svg'
import Azure from '../../assets/icon/azure.svg'
import Docker from '../../assets/icon/docker.svg'
import Jquery from '../../assets/icon/jquery-1-logo.svg'
import Sass from '../../assets/icon/sass.svg'
import NodeJS from '../../assets/icon/nodejs-1-logo.svg'
import ASPNet from '../../assets/icon/asp.svg'
import Firebase from '../../assets/icon/firebase.svg'

const Skills: React.FC = () => {
  const [state, setState] = useState<number>(0)

  return (
    <Box className='skills section'>
      <Box className='skills wrapper-box'>
        <Box className='skills title'>
          <Box className='sub-title upper'>ACQUIRED</Box>
          <Box className='title-options'>
            <Box className={`main-title ${state === 0 ? 'active' : ''}`} onClick={() => setState(0)}>
              SKILLS
            </Box>
            <Box className={`main-title ${state === 1 ? 'active' : ''}`} onClick={() => setState(1)}>
              EDUCATION
            </Box>
          </Box>
          <Box className='sub-title lower'>ACQUIRED</Box>
        </Box>
        {state === 0 ? (
          <Box className='skills details'>
            <ul className='skills-list'>
              <li>
                <Box className='skills-container'>
                  <img src={HTML} alt='HTML' />
                  <p>HTML</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={CSS} alt='CSS' />
                  <p>CSS</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Sass} alt='Sass' />
                  <p>Sass</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Javascript} alt='Javascript' />
                  <p>Javascript</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Jquery} alt='Jquery' />
                  <p>Jquery</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={React} alt='React' />
                  <p>React</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Typescript} alt='Typescript' />
                  <p>Typescript</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={PHP} alt='PHP' />
                  <p>PHP</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Git} alt='Git' />
                  <p>Git</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Firebase} alt='Firebase' />
                  <p>Firebase</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={NodeJS} alt='NodeJS' />
                  <p>NodeJS</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={ASPNet} alt='ASPNet' />
                  <p>ASP.Net</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Azure} alt='Azure' />
                  <p>Azure</p>
                </Box>
              </li>
              <li>
                <Box className='skills-container'>
                  <img src={Docker} alt='Docker' />
                  <p>Docker</p>
                </Box>
              </li>
            </ul>
          </Box>
        ) : (
          <Box className='education details'>
            <Box className='sub-details'>Fullstack Bootcamp for Web Developer</Box>
            <Box className='mini-details'>November 2022 - July 2023</Box>
            <Box className='sub-details'>Bachelor Engineer of Information Technology</Box>
            <Box className='mini-details'>September 2017 - September 2022</Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Skills
