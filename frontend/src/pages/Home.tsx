import React from "react";
import Faqs from "../containers/Faqs";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import SignUpForm from "../components/signUpForm/SignUpForm";
import JumbotronComponent from "../containers/Jumbotron";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <JumbotronComponent />
      <Faqs />
      <SignUpForm paddingLR={1.4} marginTB={2} />
      <Footer />
    </>
  );
};

export default HomePage;
