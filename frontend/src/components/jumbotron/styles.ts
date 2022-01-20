import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
  padding-left: ${({ theme }) => theme.padding.default}em;
  padding-right: ${({ theme }) => theme.padding.default}em;
  text-align: center;
  border-bottom: 8px solid #222222;

  p {
    margin-top: 1em;
  }
`;

export const Header = styled.div``;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
