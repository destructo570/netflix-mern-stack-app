import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    img {
      width: 120px;
      height: 25px;
    }
  }
`;

export const NavActions = styled.div`
  display: flex;
`;

export const NavLinks = styled.ul`
  display: none;
  margin-left: 2em;

  li {
    list-style: none;
  }

  li + li {
    margin-left: 1em;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: clamp(0.5rem, 1.2vw, 0.9rem);
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    display: flex;
  }
`;
