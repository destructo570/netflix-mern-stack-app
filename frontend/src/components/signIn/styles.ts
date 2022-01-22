import styled from "styled-components";

export const Container = styled.section`
  position: realtive;

  footer {
    position: absolute;
    padding-top: 2em;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 1);
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    footer {
      background-color: rgba(0, 0, 0, 0.75);
    }
  }
`;

export const SignInContainer = styled.section`
  padding: ${({ theme }) => theme.padding.default}em;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 450px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: white;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    padding: 3em;
    margin-top: 3em;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const FormContainer = styled.form`
  margin-top: 2em;

  input {
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.slate};
    padding: 0.8em 0.6em;
    min-height: 50px;
    font-family: "Be Vietnam Pro";
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    width: 100%;
  }

  input + input {
    margin-top: 1em;
  }

  input:focus {
    background-color: ${({ theme }) => theme.colors.slateLight};
  }

  button {
    width: 100%;
    min-height: 50px;
    margin-top: 2em;
  }
`;

export const OtherActions = styled.div`
  margin-top: 4em;
`;

export const FacebookLogin = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }

  &:hover p {
    text-decoration: underline;
  }

  p {
    margin-left: 0.5em;
  }
`;

export const SignUpPrompt = styled.div`
  display: flex;
  margin-top: 1em;

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-left: 0.5em;
  }
`;

export const OtherInfo = styled.div`
  font-size: 0.75rem;
  margin-top: 1em;

  a {
    margin-left: 0.5em;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: -10;
  height: 100%;
  width: 100%;

  &:before {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    &:before {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
