import React, { useEffect, useState, useRef } from "react";

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
  const [isComponentMounted, setComponentMounted] = useState(false);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    setComponentMounted(true);

    return () => {
      setComponentMounted(false);
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isComponentMounted) {
      const diff = Math.ceil(percentage / 1000); // Ajusta la velocidad de carga aquí

      const animateProgress = () => {
        setProgress((oldProgress) => {
          const newProgress = Math.min(oldProgress + diff, percentage);

          if (newProgress < percentage) {
            animationTimeoutRef.current = setTimeout(
              animateProgress,
              100 // Ajusta el tiempo de espera aquí
            );
          }

          return newProgress;
        });
      };

      animationTimeoutRef.current = setTimeout(
        animateProgress,
        100 // Ajusta el tiempo de espera aquí
      );
    }

    return () => {
      clearTimeout(animationTimeoutRef.current);
    };
  }, [isComponentMounted, percentage]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: "80%", background: "#fff1f1", marginBottom: PP(20) }}
        className="scroll-reveal"
      >
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
