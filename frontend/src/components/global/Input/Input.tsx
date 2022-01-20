import styled from "styled-components";

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.8em 0.6em;
  min-height: 50px;
  font-family: "Be Vietnam Pro";
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  width: 100%;
  max-width: 800px;

  &:focus {
    border: none;
  }
`;

const Input: React.FC<{ type: string; placeholder: string }> = (props) => {
  return <StyledInput type={props.type} placeholder={props.placeholder} />;
};

export default Input;
