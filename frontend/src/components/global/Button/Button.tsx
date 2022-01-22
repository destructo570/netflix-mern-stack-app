import styled from "styled-components";

const StyledButton = styled.button<{ fontSize?: number }>`
  color: ${({ theme }) => theme.colors.accentPrimary};
  padding: 0.6em 0.6em;
  font-family: "Be Vietnam Pro";
  font-size: ${({ fontSize }) => fontSize || 0.8}rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${({ theme }) => theme.colors.accentPrimary};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.accentPrimaryHighlight};
  }
`;

const Button: React.FC<{
  title: string;
  fontSize?: number;
  onClick?: () => void;
}> = (props) => {
  return (
    <StyledButton fontSize={props.fontSize} onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );
};

export default Button;
