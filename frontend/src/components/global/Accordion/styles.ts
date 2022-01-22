import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.li`
  margin-bottom: 0.6em;
  list-style: none;
`;

export const Header = styled.div`
  padding: 1.2em;
  background-color: #2e2e2e;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    padding: 1.8em;

    img {
      width: 30px;
    }
  }
`;

export const Body = styled(motion.div)`
  border-top: 2px solid black;
  padding: 1.2em;
  background-color: #2e2e2e;
  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    padding: 1.8em;
  }
`;
