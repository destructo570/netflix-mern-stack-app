import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: ${({ theme }) => theme.padding.default}em;
  img {
    max-width: 180px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const NavHeader = () => {
  const navigate = useNavigate();

  const navClickHandler = () => {
    navigate("/");
  };
  return (
    <Nav>
      <img
        src={require("../../assets/logo.png")}
        alt=""
        onClick={navClickHandler}
      />
    </Nav>
  );
};

export default NavHeader;
