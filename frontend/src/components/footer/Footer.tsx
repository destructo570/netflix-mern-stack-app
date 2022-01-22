import { FooterContainer, SupportContactNumber, FooterLinks } from "./styles";
import footerLinks from "../../fixtures/footerLinks.json";
const Footer = () => {
  const footerLinksList = footerLinks.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <FooterContainer>
      <SupportContactNumber>
        <p>Questions? Call</p>
        <a href="#">000-800-040-1843</a>
      </SupportContactNumber>
      <FooterLinks>{footerLinksList}</FooterLinks>
    </FooterContainer>
  );
};

export default Footer;