import React from 'react'
import { Typography,Box,styled } from '@mui/material';

const Wrapper = styled(Box)`
text-align: center;
background: #B3C9DB;
padding:0 45px;
padding-bottom:40px;
`
const Title = styled(Typography)`
color : #1A0808;
padding:15px;
opacity:0.8;
font-family:inherit;
`
export const FooterOne = () => {
  return (
    <Wrapper>
        <Box><Typography sx={{fontSize:"25px",marginBottom:"15px",paddingTop:"25px"}} variant="h5" fontWeight="bold">How to Play</Typography></Box>
        <Box><Title variant="subtitle1" >This is a pretty simple game, the user need to predict ace card, and those predicting kings loose. the Winner ace card  <br/> is deduced on blockchain cryptographically in provably fair way</Title></Box>
        <Box><Title>85% of money goes to winner card betters</Title></Box>
        <Box><Title>14% gets to jackpot.</Title></Box>
        <Box><Title>1% goes to platform maintenance cost</Title></Box>
    </Wrapper>
  )
}
