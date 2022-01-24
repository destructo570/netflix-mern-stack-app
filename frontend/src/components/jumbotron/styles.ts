import styled from "styled-components";

export const Inner = styled.div<{ direction: string }>`
  & + & {
    padding: 2.6em 0;
  }
  @media (min-width: ${({ theme }) => theme.layout.media.lg}) {
    min-height: 450px;
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: center;
    text-align: justify;

    & + & {
      padding: 0;
    }
  }
`;

export const Pane = styled.div`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.layout.media.lg}) {
    text-align: justify;
    width: 50%;
    padding: 0 1em;
  }
`;

export const Title = styled.h2`
  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    font-size: clamp(1.6rem, 4vw, 2.4rem);
  }
`;

export const SubTitle = styled.p`
  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    font-size: clamp(1.2rem, 4vw, 1.4rem);
  }
`;

export const Image = styled.img`
  max-width: 100%;
`;

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
