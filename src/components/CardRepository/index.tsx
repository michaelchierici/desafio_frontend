import { ReactComponent as Star } from "../../assets/components/star.svg";
import { Container, Content, Header } from "./styles";
import { CardRepositoryProps } from "../../types/Card";
import { LANGUAGES_ICONS } from "../../constants/languages";
import DefaultIcon from "../../assets/icons/default.svg";

export default function CardRepository({
  name,
  language,
  stars,
  onClick,
}: CardRepositoryProps) {
  console.log(language);
  return (
    <Container onClick={onClick}>
      <Header>
        <h3>{name}</h3>
      </Header>
      <Content>
        <img src={LANGUAGES_ICONS[language] || DefaultIcon} />
        <label>
          {stars} <Star />
        </label>
      </Content>
    </Container>
  );
}
