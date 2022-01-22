import styled from "styled-components";

export const SignUpContainer = styled.div<{
  marginLR?: number;
  marginTB?: number;
  paddingLR?: number;
  paddingTB?: number;
}>`
  padding-top: ${({ paddingTB }) => paddingTB || 0}em;
  padding-bottom: ${({ paddingTB }) => paddingTB || 0}em;
  padding-left: ${({ paddingLR }) => paddingLR || 0}em;
  padding-right: ${({ paddingLR }) => paddingLR || 0}em;
  margin-top: ${({ marginTB }) => marginTB || 0}em;
  margin-bottom: ${({ marginTB }) => marginTB || 0}em;
  margin-left: ${({ marginLR }) => marginLR || 0}em;
  margin-right: ${({ marginLR }) => marginLR || 0}em;
  text-align: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;

  button {
    margin-top: 1em;
    min-height: 50px;
    width: 100%;
    align-self: flex-start;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    flex-direction: row;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;

    button {
      margin: 0;
      border-radius: 0px 4px 4px 0px;
      width: auto;
      flex-grow: 1;
    }

    div {
      flex-grow: 3;
    }
  }
`;

export const EmailInput = styled.input<{ errors: string | undefined }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.8em 0.6em;
  min-height: 50px;
  font-family: "Be Vietnam Pro";
  font-size: 1rem;
  border: none;
  border-bottom: ${({ errors }) => (errors ? "3px solid #f5c31f" : "none")};
  border-radius: 4px;
  width: 100%;

  &:focus {
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    border-radius: 4px 0px 0px 4px;
  }
`;

export const ErrorText = styled.p`
  text-align: justify;
  margin: 0.25em 0;
  color: ${({ theme }) => theme.colors.accentSecondary};
`;
