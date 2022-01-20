import Button from "../global/Button/Button";
import Input from "../global/Input/Input";
import { SignUpContainer, FormContainer } from "./styles";

const SignUpForm: React.FC<{
  marginLR?: number;
  marginTB?: number;
  paddingLR?: number;
  paddingTB?: number;
}> = ({ marginLR, marginTB, paddingLR, paddingTB }) => {
  return (
    <SignUpContainer
      marginLR={marginLR}
      paddingLR={paddingLR}
      marginTB={marginTB}
      paddingTB={paddingTB}
    >
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <FormContainer>
        <Input type="text" placeholder="Email address" />
        <Button title="Get Started" fontSize={1} />
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
