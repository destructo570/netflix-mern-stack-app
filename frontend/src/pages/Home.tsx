import React from "react";
import Faqs from "../containers/Faqs";
import SignUpForm from "../components/signUpForm/SignUpForm";
import JumbotronComponent from "../containers/Jumbotron";
import HomeHeaderComponent from "../containers/HomePageHeader";
import FooterComponent from "../containers/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHeaderComponent />
      <JumbotronComponent />
      <Faqs />
      <SignUpForm paddingLR={1.4} marginTB={2} />
      <FooterComponent />
    </>
  );
};

export default HomePage;
