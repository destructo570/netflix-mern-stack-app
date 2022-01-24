import React from "react";
import Faqs from "../containers/Faqs";
import Footer from "../components/footer/Footer";
import SignUpForm from "../components/signUpForm/SignUpForm";
import JumbotronComponent from "../containers/Jumbotron";
import HomeHeaderComponent from "../containers/HomePageHeader";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHeaderComponent />
      <JumbotronComponent />
      <Faqs />
      <SignUpForm paddingLR={1.4} marginTB={2} />
      <Footer />
    </>
  );
};

export default HomePage;
