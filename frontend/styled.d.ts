import {} from "styled-components";
import baseTheme from "./src/styles/BaseTheme";
declare module "styled-components" {
  type Theme = typeof baseTheme;
  export interface DefaultTheme extends Theme {}
}
