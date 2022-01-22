import React from "react";
import { Container } from "./styles";
import Accordion from "../global/Accordion/Accordion";

const FAQ: React.FC = (props) => {
  return (
    <Container>
      <h2>Frequently Asked Questions</h2>
      <Accordion />
    </Container>
  );
};

export default FAQ;
