import React, { useState } from "react";

import styled from "@emotion/styled";
import { Container, Grid, Typography as MuiTypography } from "@mui/material";
import { spacing } from "@mui/system";
import "animate.css";

import AnaHola1 from ".././../assets/png/anahola1.png";
import AnaHola2 from ".././../assets/png/anahola2.png";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffa3a1, #ffbdbe, #ffd6d6, #fff1f1);
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 1rem;
  }
`;

const AllContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Content = styled.div`
  padding: 0;
  line-height: 150%;
  max-height: 20%;
  @media (max-width: 768px) {
    max-height: auto;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  cursor: pointer;
  box-shadow: inset 0px -10px 0px -5px #ffa3a1;
`;

const ImageWrapper = styled.div`
  &:before {
    bottom: 0;
    left: 0;
    position: absolute;
    content: " ";
    z-index: 1;
    display: block;
    width: 50%;
    height: 50%;
    pointer-events: none;
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 69%;
  transform: translate(-50%, -50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  background-color: #fff1f1;
  border-radius: 10px;
  max-width: 70%;
  padding: 10px;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    border: 15px solid transparent;
    border-right-color: #fff1f1;
    border-left: 0;
    border-top: 0;
    transform: translateY(-20%);
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #293437;
`;

function PageHeader() {
  const [hello, setHello] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <Wrapper>
      <AllContainer>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={9} md={8} lg={8}>
            <Content>
              <Title
                style={{
                  fontFamily: "Permanent Marker, cursive",
                  fontWeight: "400",
                  color: "#ffffff",
                  fontSize: "5rem",
                }}
                gutterBottom
                className="animate__animated animate__swing"
              >
                Hi, my name is Ana.
              </Title>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} lg={10}>
                  <Typography
                    style={{
                      fontFamily: "Lobster Two, cursive",
                      fontWeight: "400",
                      fontSize: "2.5em",
                      color: "#293437",
                    }}
                    className="animate__animated animate__lightSpeedInRight"
                  >
                    I'm a creative frontend software developer from
                    Barranquilla, Colombia.
                  </Typography>
                </Grid>
              </Grid>
            </Content>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <ImageWrapper>
              <Image
                alt="bitmoji-ana"
                onMouseOver={() => {
                  setHello(true);
                  setShowText(true);
                }}
                onMouseOut={() => {
                  setHello(false);
                  setShowText(false);
                }}
                src={hello ? AnaHola2 : AnaHola1}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/ana-mar%C3%ADa-guzm%C3%A1n-hoyos-486704159/"
                  );
                }}
              />
              <TextContainer show={showText}>
                <Text>Click on my bitmoji and see my profile on Linkedin</Text>
              </TextContainer>
            </ImageWrapper>
          </Grid>
        </Grid>
      </AllContainer>
    </Wrapper>
  );
}
export default PageHeader;
