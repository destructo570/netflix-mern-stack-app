import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.91605958243869) 0%,
    rgba(5, 5, 10, 0.3134105758161734) 56%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const HeaderPane = styled.div`
  display: flex;
  padding: 1.4em;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div``;

export const ContentPane = styled.div`
  text-align: center;
  padding: 6em 1.4em;
`;

export const Title = styled.h2``;

export const SubTitle = styled.p`
  margin-top: 1em;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1em;

  button {
    margin-top: 1em;
    min-height: 50px;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    flex-direction: row;

    input {
      max-width: 500px;
      border-radius: 4px 0px 0px 4px;
    }

    button {
      margin: 0;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  z-index: -10;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
