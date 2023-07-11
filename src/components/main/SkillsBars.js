import { Box } from "@mui/material";
import SkillBar from "../SkillBar";

export default function SkillsBars() {
  const skills = [
    { skillName: "React.js", percentage: 100 },
    { skillName: "Redux Toolkit", percentage: 100 },
    { skillName: "Typescript", percentage: 100 },
    { skillName: "Javascript", percentage: 100 },
    { skillName: "React-Router-Dom", percentage: 100 },
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 100 },
    { skillName: "Git", percentage: 100 },
    { skillName: "Material-UI", percentage: 95 },
    { skillName: "Firebase", percentage: 85 },
    { skillName: "React Testing", percentage: 85 },
    { skillName: "Figma", percentage: 70 },
  ];

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff1f1",
      }}
    >
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skillName={skill.skillName}
          percentage={skill.percentage}
        />
      ))}
    </Box>
  );
}
