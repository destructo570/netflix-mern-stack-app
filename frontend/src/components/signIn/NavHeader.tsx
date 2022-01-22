import styled from "styled-components";

const Nav = styled.nav`
  padding: ${({ theme }) => theme.padding.default}em;
  img {
    max-width: 180px;
  }
`;

const NavHeader = () => {
  return (
    <Nav>
      <img src={require("../../assets/logo.png")} alt="" />
    </Nav>
  );
};

export default NavHeader;
