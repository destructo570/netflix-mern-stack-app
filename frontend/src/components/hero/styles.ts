import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.91605958243869) 0%,
    rgba(5, 5, 10, 0.3134105758161734) 56%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const HeaderPane = styled.div`
  display: flex;
  padding: 1.4em;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div``;

export const ContentPane = styled.div`
  text-align: center;
  padding: 6em 1.4em;
`;

export const Title = styled.h2`
  font-size: clamp(1.6rem, 4vw, 3.4rem);

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    padding: 0 4em;
  }
`;

export const SubTitle = styled.p`
  margin-top: 0.5em;
  font-size: clamp(1.2rem, 4vw, 1.4rem);
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  z-index: -10;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
