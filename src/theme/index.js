import { createTheme as createMuiTheme } from "@mui/material/styles";

import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";
import shadows from "./shadows";

const theme = createMuiTheme({
  spacing: 4,
  breakpoints: breakpoints,
  components: components,
  typography: typography,
  shadows: shadows,
});

export default theme;
