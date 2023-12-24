import { Box, Typography } from '@mui/material'

const Project: React.FC = () => {
  return (
    <Box className='projects section'>
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
            <Box className='project image'></Box>
            <Box className='project more-details'>
              <Typography variant='h3'>SPR-Kirrpis Management Portal</Typography>
              <Typography variant='h4'>Technology:</Typography>
              <ul>
                <li><Typography variant='subtitle1'>ABC</Typography></li>
                <li><Typography variant='subtitle2'>XYZ</Typography></li>
              </ul>

            </Box>
         </Box>
         </Box>
      </Box>
    </Box>
  )
}



export default Project
