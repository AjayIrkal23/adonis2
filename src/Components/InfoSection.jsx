import { Box } from '@mui/material'
import React from 'react'
import { Typography,styled } from '@mui/material';


const Wrapper = styled(Box)`
padding:45px;

`
export const InfoSection = () => {
  return (
  <Wrapper>
    <Box><Typography>Jackpot Accumulation - 1000 Sol</Typography></Box>
    <Box><Typography>Last Jackpot - 12 days ago</Typography></Box>
  </Wrapper>
  )
}
