import React from "react";
import { Box, styled, Typography } from "@mui/material";
import card from "../images/card.png";

const Wrapper = styled(Box)`
  display: flex;
  height: 60vh;
  width: 100%;
  justify-content: space-between;
`;

const Image = styled("img")({
  height: "auto",
  width: "60%",
  
  
});

const ImgWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  
 
`;

const BetSection = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top:40px;
  margin-bottom:150px;
`;

const Bet = styled(Typography)`
display: flex;
width:100%;
justify-content: center;

`

const Button = styled(Typography)`

background: rgb(0,84,255);
background: linear-gradient(0deg, rgba(0,84,255,1) 0%, rgba(75,123,237,1) 100%); 
padding:10px 70px;
border-radius:50px;
color:white;
font-size:18px;


`


export const Body = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper style={{ marginLeft: "15px" }}>
          <Image src={card} alt="card.png" />
        </ImgWrapper>

        <ImgWrapper style={{ marginRight: "0px" }}>
          <Image src={card} alt="card.png" />
        </ImgWrapper>
        <ImgWrapper style={{ marginRight: "15px" }}>
          <Image src={card} alt="card.png" />
        </ImgWrapper>
      </Wrapper>
      <BetSection>
        <Bet style={{ paddingLeft: "0px" }}>
          <Button  variant="h1"  >BET</Button>
        </Bet>
        <Bet>
          <Button  variant="h1" >BET</Button>
        </Bet>
        <Bet style={{paddingRight: "0px" }}>
          <Button  variant="h1" >BET</Button>
        </Bet>
      </BetSection>
    </>
  );
};
