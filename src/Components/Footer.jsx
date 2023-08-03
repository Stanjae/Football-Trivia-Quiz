import { Box, Typography } from '@mui/material'
import React from 'react'

const Footero = () => {
  return (
    <Box sx={{p:3, bgcolor:'primary.main'}}>
        <Typography color={'neutral.main'} variant='h5' textAlign={'center'}>&copy; Stanjhae. 2023</Typography>
    </Box>
  )
}

export default Footero