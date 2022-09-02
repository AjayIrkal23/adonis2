import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Betsection } from "./Betsection";
import { BetButton } from './BetButton';
import  {  useState } from "react";


const Cards = [1,2,3]

const Wrapper = styled(Box)`
display:flex;

`
export const Body = () => {

  
  return (
    <>
    <Wrapper>
   {Cards.map(item=><Betsection Winner = {item === 2 && true } Cardnth = {item} key = {item}/>)}
   </Wrapper>
   <Wrapper>
   {Cards.map(item=><BetButton  key = {item}/>)}
   </Wrapper>
</>
  );
};
