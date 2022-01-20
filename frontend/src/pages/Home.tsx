import React from "react";
import Hero from "../components/hero/Hero";
import Promotion from "../components/promotion/Promotion";
import SignUpForm from "../components/signUpForm/SignUpForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Promotion />
      <SignUpForm paddingLR={1.4} marginTB={4} />
    </>
  );
};

export default HomePage;
