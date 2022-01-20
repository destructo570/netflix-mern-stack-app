import Button from "../global/Button/Button";
import { HeaderPane, HeaderActions } from "./styles";

const Header: React.FC = (props) => {
  return (
    <HeaderPane>
      <img
        src={require("../../assets/logo.png")}
        width={80}
        height={25}
        alt="logo"
      />
      <HeaderActions>
        <Button title="Sign In" />
      </HeaderActions>
    </HeaderPane>
  );
};

export default Header;
