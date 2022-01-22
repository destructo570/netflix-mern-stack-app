import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Footer from "./components/footer/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const baseTheme = {
  colors: {
    body: "rgb(0,0,0)",
    textPrimary: "#ffffff",
    textSecondary: "#5e5e5e",
    accentPrimary: "#e50914",
    accentPrimaryHighlight: "#ff0e1a",
    accentSecondary: "#f5c31f",
  },
  padding: {
    default: 1.4,
  },
  margin: {
    defaultVertical: 0,
    defaultHorizontal: 0,
  },
  layout: {
    maxWidth: "1100px",
    media: {
      xs: "0px",
      sm: "600px",
      md: "768px",
      lg: "950px",
      xlg: "1280px",
    },
  },
};

export type ThemeType = typeof baseTheme;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <App />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
