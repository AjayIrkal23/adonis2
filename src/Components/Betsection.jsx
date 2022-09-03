import React, { useEffect, useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import card from "../images/card.png";
import  {motion}  from "framer-motion"
import Sparkles from 'react-sparkle'
import Confetti from 'react-confetti'


const Image = styled("img")({
  height: "auto",
  width: "60%",
 margin:"auto"
});

const ImgWrapper = styled(Box)`
  display: flex;
  width:100%;
  justify-content: center;
  position: relative;
  
`;

const Div = styled(Box)`

width:100%;

.Wrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
`

const Jackpot = styled(Typography)`
position:absolute;

color:black;
transform:rotate(-60deg) translate(-60%,100%);
font-family:"inherit";
font-size:5em;


`

export const Betsection = ({Cardnth,Winner}) => {
   
   const animation = [
    
    Cardnth === 1 ? "200%" : 0 || Cardnth === 2 ? 0 : 0 ||  Cardnth === 3 ? "-200%" : 0,
    Cardnth === 1 ? "0%" : 0 || Cardnth === 2 ? "100%" : 0 ||  Cardnth === 3 ? "-100%" : 0,
    Cardnth === 1 ? "200%" : 0 || Cardnth === 2 ? "-100%" : 0 ||  Cardnth === 3 ? "-100%" : 0,
    Cardnth === 1 ? "0%" : 0 || Cardnth === 2 ? "0%" : 0 ||  Cardnth === 3 ? "0%" : 0,
    Cardnth === 1 ? "100%" : 0 || Cardnth === 2 ? "100%" : 0 ||  Cardnth === 3 ? "-200%" : 0
   ]

   
   

   const [Animation, setAnimation] = useState(0)


  useEffect(() => {

      setInterval(()=>{
        
         setAnimation(Animation+1)
        
      },2000)
 
  }, []);
   
  return (
    <Div>
      <motion.Wrapper animate={{x:animation[Animation]}}  transition={{ duration: 1,}}   className="Wrapper">
        <ImgWrapper style={{ marginRight: "0px" }}>
        {Winner === true && <><Sparkles
      color="red"
      count={20}
      minSize={20}
      maxSize={12}
      overflowPx={0}
      fadeOutSpeed={30}
      flicker={false}
      newSparkleOnFadeOut={true}
      flickerSpeed={'slow'}
    />
    <Sparkles
      color="blue"
      count={20}
      minSize={20}
      maxSize={12}
      overflowPx={0}
      fadeOutSpeed={30}
      flicker={false}
      newSparkleOnFadeOut={true}
    />
        <Confetti
     
      width={500}
      height={500}
      confettiSource = {{x: 300, y: 0, w:600 , h:0}}
    />
    <Jackpot fontWeight="bold" variant= "h3">JackPot</Jackpot>
    
    
    
    
    </> }
          <Image src={card} alt="card.png" />
        </ImgWrapper>
      </motion.Wrapper>


  
      </Div>
  );
};
