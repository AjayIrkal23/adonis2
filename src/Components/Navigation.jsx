import React from 'react'
import { Box, styled, Typography } from "@mui/material";


const Wrapper = styled(Box)`
display: flex;
height: calc(125px / 2);
align-items: center;
background:#D7D7D7;
width:100%;


`
const NavItem = styled(Box)`
width:18%;
display: flex;
justify-content:space-between;
color:black;
opacity:45%;

`
const NavNames = styled(Typography)`
font-size:14px;
text-transform:uppercase;
font-family:inherit;
display:flex;
width:100%;
justify-content:center;



`
export const Navigation = () => {
  return (
   <Wrapper>
    <NavItem style={{color:"black",opacity:"1"}}><NavNames  variant="subtitle1" fontWeight="">Home</NavNames></NavItem>
    <NavItem><NavNames variant="subtitle1">Provably-Fair</NavNames></NavItem>
    <NavItem><NavNames variant="subtitle1">LeaderBoard</NavNames></NavItem>
    <NavItem><NavNames variant="subtitle1">Faq</NavNames></NavItem>
   </Wrapper>
  )
}
