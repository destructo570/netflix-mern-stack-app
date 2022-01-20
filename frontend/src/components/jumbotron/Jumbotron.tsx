import React from "react";
import { Container, Header, Image } from "./styles";

const Jumbotron: React.FC<{ title: string; body: string; img: string }> = (
  props
) => {
  return (
    <Container>
      <Header>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </Header>
      <Image>
        <img src={props.img} alt="" />
      </Image>
    </Container>
  );
};

export default Jumbotron;
