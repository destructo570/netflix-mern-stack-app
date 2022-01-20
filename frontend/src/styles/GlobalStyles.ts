import { createGlobalStyle } from "styled-components";
import { ThemeType } from "..";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body{
  font-family: "Be Vietnam Pro";
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.textPrimary};
}

img{
  max-width:100%;
}
`;

export default GlobalStyles;
