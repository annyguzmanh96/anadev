import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import usePixelPerfect from "../hooks/usePixelPerfect";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ffa3a1",
    },
  },
});

export default function SkillBar({ skillName, percentage }) {
  const { PP } = usePixelPerfect();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === percentage) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, percentage);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "80%", background: "#fff1f1", marginBottom: PP(20) }}>
        <Box>
          <Typography sx={{ fontSize: `${PP(30)}` }}>
            {skillName}- {`${Math.floor(progress)}%`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="secondary"
            sx={{
              height: `${PP(25)}`,
              borderRadius: `${PP(15)}`,
              bgcolor: "#ffffff",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
