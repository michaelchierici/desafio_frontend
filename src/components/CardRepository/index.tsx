import { ReactComponent as Star } from "../../assets/components/star.svg";
import { Container, Content, Header } from "./styles";
import { CardRepositoryProps } from "../../types/Card";
import { LANGUAGES_ICONS } from "../../constants/languages";
import { LanguageProps } from "../../types/Languages";
import DefaultIcon from "../../assets/icons/default.svg";

export default function CardRepository({
  name,
  language,
  stars,
  onClick,
}: CardRepositoryProps) {
  return (
    <Container onClick={onClick}>
      <Header>
        <h3>{name.toUpperCase()}</h3>
      </Header>
      <Content>
        <img
          src={LANGUAGES_ICONS[language as keyof LanguageProps] || DefaultIcon}
        />
        <label>
          {stars} <Star />
        </label>
      </Content>
    </Container>
  );
}
