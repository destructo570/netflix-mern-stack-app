import Content from "./Content";
import Header from "./Header";
import { Container } from "./styles";
import { BackgroundImage } from "./styles";

const Hero: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <Content />
      <BackgroundImage>
        <img src="https://imgur.com/EKaeLRd.png" alt="" />
      </BackgroundImage>
    </Container>
  );
};

export default Hero;
