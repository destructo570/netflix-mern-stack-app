import React from "react";
import { Inner, Container, Image, Title, SubTitle, Pane } from "./styles";

const Jumbotron: React.FC<{
  direction: string;
}> = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>;
};

export const JumbotronContainer: React.FC = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export const JumbotronPane: React.FC = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

export const JumbotronTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const JumbotronSubTitle: React.FC = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export const JumbotronImage: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
  ...restProps
}) => {
  return <Image src={src} alt={alt} {...restProps} />;
};

export default Jumbotron;
