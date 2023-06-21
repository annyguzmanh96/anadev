import styled from "@emotion/styled";
import { Box, Container, Typography, Tooltip } from "@mui/material";
import { spacing } from "@mui/system";

import React from ".././../assets/svg/react.svg";
import Typescript from ".././../assets/svg/typescript.svg";
import Javascript from ".././../assets/svg/javascript.svg";
import Redux from ".././../assets/svg/redux.svg";
import ReactRouterDom from ".././../assets/svg/react-router.svg";
import MaterialUI from ".././../assets/svg/material-ui.svg";
import Figma from ".././../assets/svg/figma.svg";
import Firebase from ".././../assets/svg/firebase.svg";
import Css from ".././../assets/png/css.png";
import PPD from "../../utils/PPD";
import usePixelPerfect from "../../hooks/usePixelPerfect";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
  background: #fff1f1;
  padding-top: ${PPD(100)};
`;

const ToolIcon = styled.img`
  vertical-align: middle;
  height: auto;
`;

const Tool = styled.div`
  background-color: #facdcc;
  display: inline-block;
  padding: ${PPD(12)} ${PPD(16)};
  border-radius: ${PPD(10)};
  margin: ${PPD(25)};
`;

function MySkills() {
  const { PP } = usePixelPerfect();
  return (
    <Wrapper py={2}>
      <Container>
        <Typography
          style={{
            fontFamily: "Lobster Two, cursive",
            fontWeight: "500",
            fontSize: `${PP(48)}`,
            color: "#293437",
          }}
          className="scroll-reveal"
          gutterBottom
        >
          Application development skills
        </Typography>

        <Box my={7} className="scroll-reveal">
          <Tooltip title="React">
            <Tool>
              <ToolIcon
                alt="React"
                src={React}
                style={{ height: `${PP(34)}`, margin: `${PP(3)} 0` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Typescript">
            <Tool>
              <ToolIcon
                alt="Typescript"
                src={Typescript}
                style={{ height: `${PP(40)}` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Javascript">
            <Tool>
              <ToolIcon
                alt="Javascript"
                src={Javascript}
                style={{ height: `${PP(36)}`, margin: `${PP(2)} 0` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Redux">
            <Tool>
              <ToolIcon
                alt="Redux"
                src={Redux}
                style={{ height: `${PP(34)}`, margin: `${PP(3)} 0` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="React-Router-Dom">
            <Tool>
              <ToolIcon
                alt="React-Router-Dom"
                src={ReactRouterDom}
                style={{ height: `${PP(40)}` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Material-UI">
            <Tool>
              <ToolIcon
                alt="Material-UI"
                src={MaterialUI}
                style={{ height: `${PP(40)}` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Css">
            <Tool>
              <ToolIcon alt="Css" src={Css} style={{ height: `${PP(40)}` }} />
            </Tool>
          </Tooltip>
          <Tooltip title="Figma">
            <Tool>
              <ToolIcon
                alt="Figma"
                src={Figma}
                style={{ height: `${PP(40)}` }}
              />
            </Tool>
          </Tooltip>
          <Tooltip title="Firebase">
            <Tool>
              <ToolIcon
                alt="Firebase"
                src={Firebase}
                style={{ height: `${PP(40)}` }}
              />
            </Tool>
          </Tooltip>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default MySkills;
