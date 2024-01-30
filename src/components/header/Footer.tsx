import { Box, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/reduxHook'

const Footer = () => {
  const colors = useAppSelector((store) => store.userReducer.colors)
  return (
    <Box
      className='footer'
      sx={{
        color: colors.main,
        backgroundImage: `linear-gradient(90deg, ${colors.main}, ${colors.main})`,
      }}
    >
      <Typography>Built by Quan Nguyen - 2023</Typography>
    </Box>
  )
}

export default Footer
