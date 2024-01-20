import { Box, Typography } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div>
      <Typography variant="span">Все права зафырканы</Typography>
      <Box
        component="img"
        sx={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
        }}
        src="https://i.pinimg.com/originals/f1/ac/9b/f1ac9b44056bee4e94696370f4162108.jpg"
      /> <br />
      <Box>Фырк-фырк</Box>
    </div>
  )
}

export default Footer