import { ReactComponent as Mail } from "../../assets/components/mail.svg";
import { ReactComponent as Bio } from "../../assets/components/user.svg";

import { Container, Footer, Header, Section } from "./styles";
import { ProfileProps } from "../../types/Profile";

export default function Profile({ user }: ProfileProps) {
  return (
    <Container>
      <h1>{user.name}</h1>
      <Header>
        <img
          src={
            user.avatar_url ||
            "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          }
        />
      </Header>
      <Section>
        <div className="email-container">
          <Mail />
          <h2>{user.email || "E-mail não informado"}</h2>
        </div>
        <div className="bio-container">
          <Bio />
          <h2>{user.bio || "Sem descrição"}</h2>
        </div>
      </Section>
      <Footer>
        <div className="container-followers">
          <label>SEGUIDORES</label>
          <span>{user.followers || "--"}</span>
        </div>
        <div className="container-following">
          <label>SEGUINDO</label> <span>{user.following || "--"}</span>
        </div>
      </Footer>
    </Container>
  );
}
