import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 0.6em;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: auto;

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    padding: 0 8em;
  }
`;

export const Frame = styled.div``;

export const Item = styled.div`
  margin-bottom: 0.5em;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 1em;
`;

export const Header = styled(motion.div)`
  padding: 1.2em;
  background-color: #2e2e2e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    font-size: 1.2rem;

    img {
      width: 30px;
    }
  }
`;

export const Body = styled.p`
  border-top: 2px solid black;
  padding: 1.2em;
  background-color: #2e2e2e;
  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    padding: 1.8em;
  }
`;
