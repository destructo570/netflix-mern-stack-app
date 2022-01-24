import Accordion, {
  AccordianFrame,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  AccordionTitle,
} from "../components/global/Accordion/Accordion";
import faqData from "../fixtures/faqs.json";

const FaqComponent: React.FC = () => {
  return (
    <Accordion>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      <AccordianFrame>
        {faqData.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader>{item.header}</AccordionHeader>
            <AccordionBody>{item.body}</AccordionBody>
          </AccordionItem>
        ))}
      </AccordianFrame>
    </Accordion>
  );
};

export default FaqComponent;
