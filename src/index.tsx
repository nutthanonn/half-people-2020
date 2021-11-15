import ReactDOM from "react-dom";
import App from "./App";
import { apiStore } from "./stores/apiStore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Kanit",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App apiStore={apiStore} />
  </ThemeProvider>,
  document.getElementById("root")
);
