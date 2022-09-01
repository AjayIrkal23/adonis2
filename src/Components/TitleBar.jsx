import React from "react";
import { Box, styled, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Wrapper = styled(Box)`
  display: flex;
  height: calc(125px / 2);
  align-items: center;
  background: #1b2246;
  justify-content: space-between;
  
`;

const Title = styled(Typography)`
  color: white;
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  background:white;
  padding:3px;
  border-radius:50%;
  margin-right:10px;

`;

const StyledIcon = styled(PowerSettingsNewIcon)`
background:#46BEF1;
border-radius:50%;
padding:1px;
`
export const TitleBar = () => {
  return (
    <Wrapper>
      <Box>
        <Title variant="h5" fontWeight="bold">
          {" "}
          Ace JackPot
        </Title>
      </Box>
      <Box>
        <Title variant="h6">
          <IconWrapper>
            <StyledIcon />
          </IconWrapper>
          Connected
        </Title>
      </Box>
    </Wrapper>
  );
};
