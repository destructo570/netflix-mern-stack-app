import Footer, {
  FooterPane,
  FooterText,
  FooterLink,
} from "../components/footer/Footer";
import footerData from "../fixtures/footerLinks.json";

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <FooterText>
        Questions?<FooterLink link="sss">000-800-040-1843</FooterLink>
      </FooterText>
      <FooterPane>
        {footerData.map((item) => (
          <FooterLink key={item.id} link={item.link}>
            {item.title}
          </FooterLink>
        ))}
      </FooterPane>
    </Footer>
  );
};

export default FooterComponent;
