import React from "react";

import styled from "@emotion/styled";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { spacing } from "@mui/system";

import Project1 from ".././../assets/png/project1.PNG";
import Project2 from ".././../assets/png/project2.PNG";
import Project3 from ".././../assets/png/project3.PNG";
import Project4 from ".././../assets/png/project4.PNG";
import Project5 from ".././../assets/png/project5.PNG";
import Project6 from ".././../assets/png/project6.PNG";

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
  border-radius: 4px;
  &:hover {
    transform: scale(1.0325);
  }
`;

const ProjectChip = styled(Chip)`
  background-color: #f6433f;
  border-radius: 5px;
  color: white;
  font-size: 55%;
  height: 18px;
  margin-top: -16px;
  padding: 3px 0;
  span {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const Project = ({ isNew, img, title, link }) => {
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
        <Typography variant="h6" style={{ color: "#293437" }}>
          {title} {isNew && <ProjectChip label="Developing" />}
        </Typography>
      </ProjectContent>
    </Grid>
  );
};

function MyProjects() {
  return (
    <Wrapper pt={16} pb={20} id="projects">
      <Container>
        <Typography
          style={{
            fontFamily: "Lobster Two, cursive",
            fontWeight: "400",
            fontSize: "3em",
            color: "#293437",
          }}
          className="scroll-reveal"
          gutterBottom
        >
          Take a look at my projects
        </Typography>
        <Typography variant="h3" color="textSecondary" gutterBottom>
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
            title="Weather Website"
            img={Project4}
            link={"https://github.com/annyguzmanh96/app-clima"}
          />
          <Project
            title="Movies App"
            img={Project5}
            link={"https://github.com/annyguzmanh96/movies-app"}
          />
          <Project
            title="BBSC Website"
            img={Project6}
            link={"https://www.bbsc.cl/"}
          />
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default MyProjects;
