import React from "react";
import FAQ from "../components/faq/Faq";
import Hero from "../components/hero/Hero";
import Promotion from "../components/promotion/Promotion";
import SignUpForm from "../components/signUpForm/SignUpForm";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Promotion />
      <FAQ />
      <SignUpForm paddingLR={1.4} marginTB={2} />
    </>
  );
};

export default HomePage;
