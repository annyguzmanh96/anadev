import React, { useState } from "react";

import styled from "@emotion/styled";
import { Container, Grid, Typography as MuiTypography } from "@mui/material";
import { spacing } from "@mui/system";
import "animate.css";

import AnaHola1 from ".././../assets/png/anahola1.png";
import AnaHola2 from ".././../assets/png/anahola2.png";
import PPD from "../../utils/PPD";
import usePixelPerfect from "../../hooks/usePixelPerfect";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffa3a1, #ffbdbe, #ffd6d6, #fff1f1);
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    padding-top: ${PPD(16)};
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
  height: ${PPD(750)};
  display: flex;
  z-index: 0;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  cursor: pointer;
  box-shadow: inset 0px -10px 0px -5px #ffa3a1;
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  @media (min-width: 768px) {
    font-size: ${PPD(80)};
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
  border-radius: ${PPD(20)};
  font-style: italic;
  max-width: 70%;
  padding: ${PPD(0.625)};
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    border: ${PPD(0.938)} solid transparent;
    border-right-color: #fff1f1;
    border-left: 0;
    border-top: 0;
    transform: translateY(-20%);
  }
`;

const Text = styled.p`
  font-size: ${PPD(24)};
  color: #293437;
`;

function PageHeader() {
  const { PP } = usePixelPerfect();
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
                  fontSize: `${PP(80)}`,
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
                      fontSize: `${PP(40)}`,
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
        <Grid container justifyContent="center">
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
        </Grid>
        <TextContainer show={showText}>
          <Text>Click on my bitmoji and see my profile on Linkedin</Text>
        </TextContainer>
      </AllContainer>
    </Wrapper>
  );
}
export default PageHeader;
