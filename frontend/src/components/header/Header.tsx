import {
  Container,
  Frame,
  Logo,
  Background,
  ButtonLink,
  Feature,
  FeatureSubTitle,
  FeatureTitle,
} from "./styles";
import { Link as ReactRouterLink } from "react-router-dom";

const Header: React.FC<{ bg: boolean; minHeight?: string }> = ({
  children,
  ...props
}) => {
  return props.bg ? (
    <Background minHeight={props.minHeight}>{children}</Background>
  ) : (
    <>{children}</>
  );
};

export default Header;

export const HeaderContainer: React.FC<{}> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const HeaderFrame: React.FC<{}> = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export const HeaderFeature: React.FC<{}> = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

export const HeaderFeatureTitle: React.FC<{}> = ({
  children,
  ...restProps
}) => {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};

export const HeaderFeatureSubTitle: React.FC<{}> = ({
  children,
  ...restProps
}) => {
  return <FeatureSubTitle {...restProps}>{children}</FeatureSubTitle>;
};

export const HeaderButtonLink: React.FC<{ to: string }> = ({
  children,
  to,
  ...restProps
}) => {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

export const HeaderLogo: React.FC<{
  to: string;
  logo: string;
  alt: string;
}> = ({ children, to, logo, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo src={logo} width={80} height={25} {...restProps}>
        {children}
      </Logo>
    </ReactRouterLink>
  );
};
