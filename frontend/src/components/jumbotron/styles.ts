import styled from "styled-components";

export const Container = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
  padding-left: ${({ theme }) => theme.padding.default}em;
  padding-right: ${({ theme }) => theme.padding.default}em;
  border-bottom: 8px solid #222222;

  p {
    margin-top: 1em;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.layout.media.lg}) {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
  }
`;

export const Header = styled.div`
  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    h2 {
      font-size: clamp(1.6rem, 4vw, 2.4rem);
    }
    p {
      font-size: clamp(1.2rem, 4vw, 1.4rem);
    }
  }

  //TODO: Remove use of these percentage widths
  @media (min-width: ${({ theme }) => theme.layout.media.lg}) {
    width: 65%;
    h2 {
      width: 80%;
    }
    p {
      width: 80%;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
