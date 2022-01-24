import styled from "styled-components";
import Button from "../global/Button/Button";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  padding: ${({ theme }) => theme.padding.default}em;
  max-width: 450px;
  margin: auto;

  button {
    width: 100%;
    min-height: 50px;
    margin-top: 2em;
  }
`;

export const Base = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 1.4em;
  min-height: 500px;
`;

export const Pane = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  &:hover {
    cursor: pointer;
  }
`;
export const Icon = styled.img``;
export const Break = styled.div<{ mtb?: string }>`
  margin: ${({ mtb }) => (mtb ? mtb : 0)} 0;
`;

export const Error = styled.p`
  text-align: justify;
  font-size: 0.75rem;
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colors.accentSecondary};
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: white;
  padding: 0.75em 0;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.slate};
  padding: 0.8em 0.6em;
  min-height: 50px;
  font-family: "Be Vietnam Pro";
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  width: 100%;

  & + & {
    margin-top: 0.8em;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.slateLight};
  }
`;

export const Submit = styled(Button)``;

export const Text = styled.p`
  margin: 1em 0;
`;

export const TextSmall = styled.p`
  font-size: 0.8rem;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  margin: 0 0.5em;
  color: white;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
