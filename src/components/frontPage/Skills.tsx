import { Box } from '@mui/material'
import { useState } from 'react'

import HTML from '../../assets/icon/html-5.svg'
import '../../assets/icon/css-3.svg'
import '../../assets/icon/javascript.svg'
import '../../assets/icon/reactjs.svg'
import '../../assets/icon/typescript-official.svg'
import '../../assets/icon/git.svg'
import '../../assets/icon/php.svg'

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
                  <img src={HTML} />
                </Box>
              </li>
            </ul>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  )
}

export default Skills
