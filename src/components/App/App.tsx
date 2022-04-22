import "./App.css";
import Details from "../Details";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["inter"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  );
}

export default App;
