import styled from "styled-components";

export const Container = styled.section`
  h2 {
    padding-left: ${({ theme }) => theme.padding.default}em;
    padding-right: ${({ theme }) => theme.padding.default}em;
    text-align: center;
    padding: 1.2em 0;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    padding: 0 5em;
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    h2 {
      font-size: clamp(1.6rem, 4vw, 2.4rem);
    }
    p {
      font-size: clamp(1.2rem, 4vw, 1.4rem);
    }
  }
`;
