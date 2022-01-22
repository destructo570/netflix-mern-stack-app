import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence exitBeforeEnter>
        <Header onClick={props.toggleIndex.bind(null, id)}>
          <p>{title}</p>
          <img src="images/icons/add-icon.svg" alt="" />
        </Header>
        {props.clicked === id && (
          <Body
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0, transition: { duration: 0.1 } }}
            key={id}
          >
            <p>{body}</p>
          </Body>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccordionItem;
