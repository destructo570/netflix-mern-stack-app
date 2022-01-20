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

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    flex-direction: row;

    input {
      max-width: 500px;
      border-radius: 4px 0px 0px 4px;
    }

    button {
      margin: 0;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;
