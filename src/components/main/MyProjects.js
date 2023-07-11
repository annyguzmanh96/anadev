import React from "react";

import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";

import Project1 from ".././../assets/png/project1.PNG";
import Project2 from ".././../assets/png/project2.PNG";
import Project3 from ".././../assets/png/project3.PNG";
import Project4 from ".././../assets/png/project4.PNG";
import Project5 from ".././../assets/png/project5.PNG";
import Project6 from ".././../assets/png/project6.PNG";
import Project7 from ".././../assets/png/project7.PNG";
import PPD from "../../utils/PPD";
import usePixelPerfect from "../../hooks/usePixelPerfect";

const Wrapper = styled.div`
  ${spacing};
  background: linear-gradient(to bottom, #fff1f1, #ffd6d6, #ffbdbe, #ffa3a1);
  text-align: center;
`;

const ProjectContent = styled.div(spacing);

const ProjectLink = styled.div`
  cursor: pointer;
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 4px 12px 0 rgba(18, 38, 63, 0.125);
  transition: 0.15s ease-in-out;
  border-radius: ${PPD(8)};
  &:hover {
    transform: scale(1.0325);
  }
`;

const Project = ({ isNew, img, title, link }) => {
  const { PP } = usePixelPerfect();
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <ProjectContent px={2}>
        <ProjectLink
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          <ProjectImage alt={` ${title} Project`} src={img} />
        </ProjectLink>
        <Box mb={3} />
        <Typography
          style={{ color: "#293437", fontSize: `${PP(30)}`, fontWeight: "500" }}
        >
          {title}
        </Typography>
      </ProjectContent>
    </Grid>
  );
};

function MyProjects() {
  const { PP } = usePixelPerfect();
  return (
    <Wrapper pt={15} pb={20} id="projects">
      <Container>
        <Typography
          style={{
            fontFamily: "Lobster Two, cursive",
            fontWeight: "400",
            fontSize: `${PP(48)}`,
            color: "#293437",
          }}
          gutterBottom
        >
          Take a look at my projects
        </Typography>
        <Typography
          style={{ fontSize: `${PP(30)}`, fontWeight: "500" }}
          color="textSecondary"
          gutterBottom
        >
          Projects developed with: React.js, Typescript, Javascript, Redux
          Toolkit, Formik, Yup, Material-UI, CSS, SASS, Styled-components, Git,
          WordPress.
        </Typography>
        <Box mb={8} />

        <Grid container className="scroll-reveal" spacing={10}>
          <Project
            title="Muta Management App"
            img={Project1}
            link={"https://management.mutaworld.com/auth/sign-in"}
            isNew
          />
          <Project
            title="Muta Generator App"
            img={Project2}
            link={"https://app.mutaworld.com/"}
            isNew
          />
          <Project
            title="Metfin Website"
            img={Project3}
            link={"https://metfin-web.web.app/"}
          />
          <Project
            title="Maternidad Paso a Paso Website"
            img={Project6}
            link={"https://aprendedigital.pro/maternidad-paso-paso/"}
          />
          <Project
            title="BBSC Website"
            img={Project7}
            link={"https://www.bbsc.cl/"}
          />
          <Project
            title="Movies App"
            img={Project5}
            link={"https://github.com/annyguzmanh96/movies-app"}
          />
          <Project
            title="Weather Website"
            img={Project4}
            link={"https://github.com/annyguzmanh96/app-clima"}
          />
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default MyProjects;
