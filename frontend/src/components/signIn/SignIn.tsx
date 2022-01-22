import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import SignInForm from "./SignInForm";
import {
  SignInContainer,
  SignUpPrompt,
  OtherInfo,
  FacebookLogin,
  OtherActions,
  BackgroundImage,
  Container,
} from "./styles";

const SignIn = () => {
  return (
    <Container>
      <SignInContainer>
        <h2>Sign In</h2>
        <SignInForm />
        <OtherActions>
          <FacebookLogin>
            <img
              src={require("../../assets/icons/facebook-icon.png")}
              width={24}
              height={24}
              alt="login with facebook"
            />
            <p>Login with Facebook</p>
          </FacebookLogin>
          <SignUpPrompt>
            <p>New to Netflix?</p>
            <Link to="/signup">Sign Up Now.</Link>
          </SignUpPrompt>
          <OtherInfo>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a href="#" rel="noreferrer" target="_blank">
                Learn More.
              </a>
            </p>
          </OtherInfo>
        </OtherActions>
      </SignInContainer>
      <Footer />
      <BackgroundImage>
        <img src="https://imgur.com/EKaeLRd.png" alt="" />
      </BackgroundImage>
    </Container>
  );
};

export default SignIn;
