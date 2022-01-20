import React from "react";
import Jumbotron from "../jumbotron/Jumbotron";
import data from "../../fixtures/jumbo.json";
import { Container } from "./styles";

const Promotion: React.FC = (props) => {
  const content = data.map((item) => {
    return (
      <Jumbotron
        key={item.id}
        title={item.title}
        body={item.subTitle}
        img={item.image}
      />
    );
  });
  return <Container>{content}</Container>;
};

export default Promotion;
