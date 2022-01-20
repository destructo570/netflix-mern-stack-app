import Button from "../global/Button/Button";
import Input from "../global/Input/Input";

import { ContentPane, Title, SubTitle, SignUpForm } from "./styles";

const Content: React.FC = (props) => {
  return (
    <ContentPane>
      <Title>Unlimited movies, TV shows and more.</Title>
      <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
      <SubTitle>
        Ready to watch? Enter your email to create or restart your membership.
      </SubTitle>
      <SignUpForm>
        <Input type="text" placeholder="Email address" />
        <Button title="Get Started" fontSize={1} />
      </SignUpForm>
    </ContentPane>
  );
};

export default Content;
