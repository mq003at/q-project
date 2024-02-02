import { Box, Button } from '@mui/material'
import Avatar from '../../assets/avatar-2500.jpg'
import { useState } from 'react'

import { LinkedIn, GitHub, Email } from '@mui/icons-material/'
import { useAppSelector } from '../../hooks/reduxHook'
const Home: React.FC = () => {
  const colors = useAppSelector((store) => store.userReducer.colors)

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
        <Box className='say-hi' sx={{ color: colors.main }}>HI THERE! MY NAME IS</Box>
        <Box className='my-name' sx={{ color: colors.special }}>QUAN NGUYEN</Box>
        <Box className='passionate'>
          <Box sx={{ color: colors.main }}>YOUR</Box>
          <Box className={`adjective ${toggle}`} onClick={() => replaceAdj()} sx={{ color: colors.special }}>
            {chosenAdj[0]} 
          </Box>
        </Box>
        <Box className='who'>
          <Box className='text-wrapper'>
            <Box className='journey-1' sx={{ color: colors.main }}>FULL-STACK DEVELOPER</Box>
            <Box className='journey-2' sx={{ color: colors.main }}>REACT ENTHUSIAST</Box>
            <Box className='journey-3' sx={{ color: colors.main }}>ASP.NET CODER</Box>
            <Box className='journey-4' sx={{ color: colors.main }}>DEV-OPS DEPLOYER</Box>
          </Box>
        </Box>
        <Box className='direct-wrapper'>
          <Button className='styled-button'>Resume</Button>
          <Box className='other-direct'>
            <LinkedIn className='icon' onClick={() => handleNavigation('linkedin')}  sx={{ color: colors.main }} />
            <GitHub className='icon' onClick={() => handleNavigation('github')}  sx={{ color: colors.main }} />
            <Email className='icon' onClick={() => handleNavigation('email')}  sx={{ color: colors.main }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
