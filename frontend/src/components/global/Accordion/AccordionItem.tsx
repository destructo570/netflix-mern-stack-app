import React from "react";
import { Container, Header, Body } from "./styles";

type AccordionObject = {
  id: number;
  title: string;
  body: string;
};

const AccordionItem: React.FC<{
  item: AccordionObject;
  toggleIndex: (a: number) => void;
  clicked: number | null;
}> = (props) => {
  const { id, title, body } = props.item;

  return (
    <Container>
      <Header onClick={props.toggleIndex.bind(null, id)}>
        <p>{title}</p>

        <img src="images/icons/add-icon.svg" alt=""></img>
      </Header>
      {props.clicked === id && (
        <Body>
          <p>{body}</p>
        </Body>
      )}
    </Container>
  );
};

export default AccordionItem;
