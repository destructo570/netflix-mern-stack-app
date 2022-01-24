import React from "react";
import {
  Container,
  Title,
  Error,
  Text,
  TextSmall,
  Link,
  Base,
  Input,
  Submit,
  Pane,
  Icon,
  Break,
} from "./styles";

const Form: React.FC<{}> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

export const FormBase: React.FC = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

export const FormPane: React.FC = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

export const FormTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const FormInput: React.FC<{
  inputId: string;
  type: string;
  value: string;
  name: string;
  placeholder: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  blurHandler: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ children, ...props }) => {
  return (
    <Input
      id={props.inputId}
      onChange={props.changeHandler}
      onBlur={props.blurHandler}
      {...props}
    >
      {children}
    </Input>
  );
};

export const FormSubmit: React.FC<{ title: string; onClick?: () => void }> = ({
  children,
  title,
  ...restProps
}) => {
  return (
    <Submit title={title} {...restProps}>
      {children}
    </Submit>
  );
};

export const FormText: React.FC<{}> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

export const FormIcon: React.FC<{
  icon: string;
  alt: string;
}> = ({ children, icon, ...restProps }) => {
  return <Icon src={icon} width={24} height={24} {...restProps} />;
};

export const FormTextSmall: React.FC = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

export const FormError: React.FC = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

export const FormLink: React.FC<{ to: string }> = ({
  children,
  to,
  ...restProps
}) => {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

export const FormBreak: React.FC<{ mtb?: string }> = ({
  children,
  mtb,
  ...restProps
}) => {
  return (
    <Break mtb={mtb} {...restProps}>
      {children}
    </Break>
  );
};
