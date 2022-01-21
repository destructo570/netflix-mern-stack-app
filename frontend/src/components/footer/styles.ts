import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.padding.default}em;
`;
export const SupportContactNumber = styled.div`
  display: flex;

  a {
    margin-left: 0.5em;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 2em 0;
  font-size: 0.75rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.layout.media.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
