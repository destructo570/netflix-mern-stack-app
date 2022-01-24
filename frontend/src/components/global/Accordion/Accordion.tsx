import { motion } from "framer-motion";
import React, { useState, useContext, createContext } from "react";
import { Container, Frame, Item, Title, Header, Body } from "./styles";

type ToggleContextObj = { toggleShow: boolean; toggleHandler: () => void };

const ToggleContext = createContext<ToggleContextObj>({
  toggleShow: false,
  toggleHandler: () => {},
});

const Accordion: React.FC = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Accordion;

export const AccordianFrame: React.FC = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

export const AccordionItem: React.FC = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  const toggleHandler = () => {
    setToggleShow((prevState) => {
      return !prevState;
    });
  };

  return (
    <ToggleContext.Provider value={{ toggleShow, toggleHandler }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

export const AccordionTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

export const AccordionHeader: React.FC = ({ children, ...restProps }) => {
  const { toggleHandler } = useContext(ToggleContext);
  const [toggleImg, setToggleImg] = useState(0);

  const onTapHandler = () => {
    setToggleImg(toggleImg === 0 ? 45 : 0);
  };

  return (
    <Header {...restProps} onClick={toggleHandler} onTap={onTapHandler}>
      {children}
      <motion.img
        src="/images/icons/add.png"
        alt="Open"
        onTap={onTapHandler}
        animate={{ rotate: toggleImg }}
      />
    </Header>
  );
};

export const AccordionBody: React.FC = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
