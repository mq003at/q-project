import { Box, Button } from '@mui/material'
import Avatar from '../../assets/avatar-2500.jpg'
import { useState } from 'react'

import { LinkedIn, GitHub, Email } from '@mui/icons-material/'
import { useNavigate } from 'react-router-dom'
const Home: React.FC = () => {
  const navigate = useNavigate();

  const randomAdj: string[] = ['PASSIONATE', 'ENTHUSIASTIC', 'DEVOTED', 'COMITTED', 'DEDICATED', 'DYNAMIC']
  const [chosenAdj, setChosenAdj] = useState<[string, number]>(['PASSIONATE', 0])

  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [count, setCount] = useState<number>(1)
  const [toggle, setToggle] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setCount(count + 1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const replaceAdj = () => {
    let rI: number
    do {
      rI = Math.floor(Math.random() * randomAdj.length)
    } while (rI === chosenAdj[1])

    setToggle(true)

    setTimeout(() => {
      setChosenAdj([randomAdj[rI], rI])
      setToggle(false)
    }, 500)
  }

  const handleNavigation = (moveTo: string) => {
    if (moveTo === 'github') window.open('https://github.com/mq003at/', '_blank')
    else if (moveTo === 'linkedin')  window.open('https://www.linkedin.com/in/quannguyen1998/', '_blank')
    else  window.open('mailto:quan.nguyen.suomea@gmail.com');
  }

  return (
    <Box className='home section' id='home'>
      <Box className='img-div'>
        <Box
          className='img-avatar'
          style={{ transform: isHovered ? `rotate(${count * 360}deg)` : `rotate(${count * 360}deg)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          component={'img'}
          alt='Default Avatar'
          src={Avatar}
        ></Box>
      </Box>
      <Box className='text-div'>
        <Box className='say-hi'>HI THERE! MY NAME IS</Box>
        <Box className='my-name'>QUAN NGUYEN</Box>
        <Box className='passionate'>
          <span>YOUR</span>
          <Box className={`adjective ${toggle}`} onClick={() => replaceAdj()}>
            {chosenAdj[0]} 
          </Box>
          <span> FULLSTACK DEVELOPER</span>
        </Box>
        <Box className='who'>
          <div className='on'>ON HIS </div>
          <div className='text-wrapper'>
            <span className='journey-1'>PATH TO BECOME A GREAT DEVELOPER</span>
            <span className='journey-2'>JOURNEY IN THE WORLD OF TECHNOLOGY</span>
            <span className='journey-3'>EXPLORATION OF THE MACHINE'S POTENTIAL</span>
            <span className='journey-4'>ADVENTURE IN THE CODING REALM</span>
          </div>
        </Box>
        <Box className='direct-wrapper'>
          <Button className='styled-button'>Resume</Button>
          <Box className='other-direct'>
            <LinkedIn className='icon' onClick={() => handleNavigation('linkedin')} />
            <GitHub className='icon' onClick={() => handleNavigation('github')} />
            <Email className='icon' onClick={() => handleNavigation('email')}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
