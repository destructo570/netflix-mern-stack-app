import Button from "../global/Button/Button";
import { HeaderPane, HeaderActions } from "./styles";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

const Header: React.FC = (props) => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate(SIGN_IN);
  };

  return (
    <HeaderPane>
      <img
        src={require("../../assets/logo.png")}
        width={80}
        height={25}
        alt="logo"
      />
      <HeaderActions>
        <Button title="Sign In" onClick={signInHandler} />
      </HeaderActions>
    </HeaderPane>
  );
};

export default Header;
