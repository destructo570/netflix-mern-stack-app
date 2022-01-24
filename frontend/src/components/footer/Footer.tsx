import { Container, Text, Link, Pane } from "./styles";
import React from "react";

const Footer: React.FC = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const FooterPane: React.FC = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

export const FooterText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const FooterLink: React.FC<{ link: string }> = ({
  children,
  link,
  ...restProps
}) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer" {...restProps}>
      {children}
    </Link>
  );
};

export default Footer;
