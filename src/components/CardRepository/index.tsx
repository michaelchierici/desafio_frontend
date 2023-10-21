import { Container, Content, Header } from "./styles";
import { ReactComponent as Star } from "../../assets/components/star.svg";
import { RepositoryProps } from "../../types/Repository";

export default function CardRepository(repository: RepositoryProps) {
  return (
    <Container>
      <Header>{repository.name}</Header>
      <Content>
        <div>{repository.language}</div>
        <label>
          {repository.stargazers_count} <Star />
        </label>
      </Content>
    </Container>
  );
}
