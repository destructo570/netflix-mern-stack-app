import styled from "styled-components";

export const Container = styled.footer`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.padding.default}em;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: auto;
`;

export const Text = styled.p``;

export const Link = styled.a`
  margin-left: 0.5em;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Pane = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 2em 0;
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
