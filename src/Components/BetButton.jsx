import React from 'react'
import { Box, styled, Typography } from "@mui/material";
import card from "../images/card.png";


const BetSection = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 150px;
`;

const Bet = styled(Typography)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled(Typography)`
  background: rgb(0, 84, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 84, 255, 1) 0%,
    rgba(75, 123, 237, 1) 100%
  );
  padding: 10px 70px;
  border-radius: 50px;
  color: white;
  font-size: 18px;
`;
export const BetButton = () => {
  return (
    <BetSection>
    <Bet style={{ paddingLeft: "0px" }}>
      <Button variant="h1">BET</Button>
    </Bet>
  </BetSection>
  )
}

