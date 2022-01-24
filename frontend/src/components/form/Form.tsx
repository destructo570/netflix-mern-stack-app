import { Container, Title, Error, Text, TextSmall, Link, Base } from "./styles";

const Form: React.FC<{}> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

export const FormBase: React.FC = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

export const FormTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FormText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const FormTextSmall: React.FC = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

export const FormError: React.FC = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

export const FormLink: React.FC = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};
