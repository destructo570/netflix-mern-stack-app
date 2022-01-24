import Jumbotron, {
  JumbotronContainer,
  JumbotronImage,
  JumbotronPane,
  JumbotronSubTitle,
  JumbotronTitle,
} from "../components/jumbotron/Jumbotron";
import jumbo from "../fixtures/jumbo.json";

const JumbotronComponent: React.FC = ({ children, ...restProps }) => {
  return (
    <JumbotronContainer>
      {jumbo.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <JumbotronPane>
            <JumbotronTitle>{item.title}</JumbotronTitle>
            <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
          </JumbotronPane>
          <JumbotronPane>
            <JumbotronImage src={item.image} alt="" />
          </JumbotronPane>
        </Jumbotron>
      ))}
    </JumbotronContainer>
  );
};
export default JumbotronComponent;
