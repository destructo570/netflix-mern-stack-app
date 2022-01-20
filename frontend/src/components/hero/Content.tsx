import SignUpForm from "../signUpForm/SignUpForm";
import { ContentPane, Title, SubTitle } from "./styles";

const Content: React.FC = (props) => {
  return (
    <ContentPane>
      <Title>Unlimited movies, TV shows and more.</Title>
      <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
      <SignUpForm paddingLR={0} marginLR={0} paddingTB={1.4} />
    </ContentPane>
  );
};

export default Content;
