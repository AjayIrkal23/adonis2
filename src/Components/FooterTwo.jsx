import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Wrapper = styled(Box)`
  display: flex;
  height: calc(120px / 2);
  align-items: center;
  background: #1b2246;
  justify-content: space-between;
  padding: 0 100px;
  
`;

const IconWrapper = styled(Box)`
color:white;

`
export const FooterTwo = () => {
  return (
   <Wrapper>
    <IconWrapper><TwitterIcon style={{margin:"0 10px",fontSize:"28px"}}/><FacebookOutlinedIcon style={{margin:"0 10px",fontSize:"28px"}}/><LinkedInIcon style={{margin:"0 10px",fontSize:"28px"}}/></IconWrapper>
    <Box> <Typography sx={{color:"white"}} fontWeight="bold" variant="subtitle2">All Right Reserved by Ace Jackpot</Typography> </Box>
   </Wrapper>
  )
}
