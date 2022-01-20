import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const baseTheme = {
  colors: {
    body: "rgb(0,0,0)",
    textPrimary: "#ffffff",
    textSecondary: "rgba(0, 0, 0)",
    accentPrimary: "#e50914",
    accentPrimaryHighlight: "#ff0e1a",
  },
  layout: {
    maxWidth: "1250px",
    medium: {
      media: "768px",
    },
    large: {
      media: "1200px",
    },
  },
};

export type ThemeType = typeof baseTheme;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
