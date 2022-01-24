import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: auto;
`;

export const Background = styled.div<{ src?: string; minHeight?: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  z-index: 0;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/hero-bg.jpg"})
    top left / cover no-repeat;

  &:after {
    position: absolute;
    z-index: -200;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.91605958243869) 0%,
      rgba(5, 5, 10, 0.3134105758161734) 56%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const Frame = styled.div`
  display: flex;
  padding: 1em;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    max-width: 1600px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Logo = styled.img``;

export const Feature = styled.div`
  text-align: center;
  padding: 6em 1.4em;
`;

export const FeatureTitle = styled.h2`
  font-size: clamp(1.6rem, 4vw, 3.4rem);

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    padding: 0 4em;
  }
`;

export const FeatureSubTitle = styled.p`
  margin-top: 0.5em;
  font-size: clamp(1.2rem, 4vw, 1.4rem);
`;

export const ButtonLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  padding: 0.5em 1em;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.colors.accentPrimary};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentPrimaryHighlight};
  }
`;
