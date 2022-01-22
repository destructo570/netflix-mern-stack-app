import React from "react";
import { Container, Header, Image, ContentWrapper } from "./styles";

const Jumbotron: React.FC<{ title: string; body: string; img: string }> = (
  props
) => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </Header>
        <Image>
          <img src={props.img} alt="" />
        </Image>
      </ContentWrapper>
    </Container>
  );
};

export default Jumbotron;
