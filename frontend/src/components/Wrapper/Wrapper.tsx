import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.layout.media.sm}) {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
  }
`;

const Wrapper: React.FC = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Wrapper;
