import React, { useState } from "react";
import faqList from "../../../fixtures/faqs.json";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    if (clicked === index) {
      setClicked(null);
      return;
    }
    setClicked(index);
    console.log(clicked);
  };

  const faqContent = faqList.map((item) => {
    const faqItem = { id: item.id, title: item.header, body: item.body };
    return (
      <AccordionItem
        item={faqItem}
        toggleIndex={toggleIndex}
        clicked={clicked}
        key={item.id}
      />
    );
  });

  return <ul>{faqContent}</ul>;
};

export default Accordion;
