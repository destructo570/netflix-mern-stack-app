import Header, {
  HeaderContainer,
  HeaderFeature,
  HeaderFeatureSubTitle,
  HeaderFeatureTitle,
  HeaderFrame,
  HeaderLogo,
} from "../components/header/Header";
import { HOME, SIGN_IN } from "../constants/routes";
import { ButtonLink } from "../components/header/styles";
import SignUpForm from "../components/signUpForm/SignUpForm";

const HomeHeaderComponent = () => {
  return (
    <Header bg={true}>
      <HeaderFrame>
        <HeaderLogo
          to={HOME}
          logo={require("../assets/logo.png")}
          alt="netflix"
        />
        <ButtonLink to={SIGN_IN}>Sign In</ButtonLink>
      </HeaderFrame>
      <HeaderContainer>
        <HeaderFeature>
          <HeaderFeatureTitle>
            Unlimited movies, TV shows and more.
          </HeaderFeatureTitle>
          <HeaderFeatureSubTitle>
            Watch anywhere. Cancel anytime.
          </HeaderFeatureSubTitle>
          <SignUpForm marginTB={1.4} />
        </HeaderFeature>
      </HeaderContainer>
    </Header>
  );
};

export default HomeHeaderComponent;
