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
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    flex-direction: row;

    button {
      margin: 0;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const EmailInput = styled.input`
  max-width: 500px;
  border-radius: 4px 0px 0px 4px;
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

export const ErrorText = styled.p`
  text-align: justify;
  margin: 0.25em 0;
  color: ${({ theme }) => theme.colors.accentSecondary};
`;
