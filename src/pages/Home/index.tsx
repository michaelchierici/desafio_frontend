import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import UsePagination from "../../hooks/usePagination";
import UserService from "../../api/services/User/UserService";

import {
  Container,
  Content,
  ProfileContent,
  ProfileHeader,
  ProfileSection,
  ProfileFooter,
  SearchContainer,
  CardContainer,
  CardContent,
} from "./styles";
import toast, { Toaster } from "react-hot-toast";

import CardRepository from "../../components/CardRepository";
import Loader from "../../components/Loader";
import { Input } from "../../components/Input";

import { ReactComponent as Mail } from "../../assets/components/mail.svg";
import { ReactComponent as Bio } from "../../assets/components/user.svg";
import { ReactComponent as Search } from "../../assets/components/search.svg";
import { ReactComponent as Arrow } from "../../assets/components/arrow.svg";
import { ReactComponent as NotFound } from "../../assets/components/notFound.svg";

import { UserProps } from "../../types/User";
import { RepositoryProps } from "../../types/Repository";

import delay from "../../utils/delay";

export default function Home() {
  const theme = useTheme();
  const { page, take, handleChangePage } = UsePagination();

  const [initialLoading, setInitialLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const [orderBy, setOrderBy] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState({} as UserProps);
  const [repositories, setRepositories] = useState([] as RepositoryProps[]);

  const notify = (message: string) => toast(message);

  const handleSearchUser = useCallback(async () => {
    setSearchLoading(true);
    if (!searchTerm) {
      return notify("Digite o nome de um usuário sem espaços!");
    }
    try {
      const user = await UserService.findDetails(searchTerm);
      setUser(user);
    } catch {
      notify(`Usuário ${searchTerm} não encontrado!`);
    } finally {
      setSearchLoading(false);
    }
  }, [user, searchTerm]);

  const getUsersRepositories = useCallback(async () => {
    try {
      const repos = await UserService.findRepositories(searchTerm, page, take);
      setRepositories(repos);
    } catch {
      notify(`Usuário ${searchTerm} não possui repositórios!`);
    }
  }, [user, searchTerm]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getUsersRepositories();
    }
  }, [user]);

  useEffect(() => {
    async function fakeLoading() {
      await delay(1000);
      setInitialLoading(false);
    }
    fakeLoading();
  }, []);

  function handleChangeOrderBy() {
    setOrderBy((prevState) => !prevState);
  }

  function handleGoToRepositoryInfo(repository: RepositoryProps) {
    console.log(repository);
  }

  return (
    <Container>
      <Loader isLoading={initialLoading} />
      <Content>
        <ProfileContent>
          <h1>{user.name}</h1>
          <ProfileHeader>
            <img
              src={
                user.avatar_url ||
                "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              }
            />
          </ProfileHeader>
          <ProfileSection>
            <div className="email-container">
              <Mail />
              <h2>{user.email || "E-mail não informado"}</h2>
            </div>
            <div className="bio-container">
              <Bio />
              <h2>{user.bio || "Sem descrição"}</h2>
            </div>
          </ProfileSection>
          <ProfileFooter>
            <div className="container-followers">
              <label>SEGUIDORES</label>
              <span>{user.followers || "--"}</span>
            </div>
            <div className="container-following">
              <label>SEGUINDO</label> <span>{user.following || "--"}</span>
            </div>
          </ProfileFooter>
        </ProfileContent>

        <CardContainer>
          <SearchContainer orderBy={orderBy}>
            <Input
              placeholder="Procurar nome do usuário no GitHub..."
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
            />
            <Search className="search-user" onClick={handleSearchUser} />
            <Arrow className="orderby-star" onClick={handleChangeOrderBy} />
          </SearchContainer>
          <CardContent>
            {Object.keys(repositories).length === 0 && <NotFound />}
            {repositories.map((repository, index) => (
              <CardRepository
                key={index}
                name={repository.name}
                language={repository.language?.toLowerCase()}
                stars={repository.stargazers_count}
                onClick={() => handleGoToRepositoryInfo(repository)}
              />
            ))}
          </CardContent>
        </CardContainer>
      </Content>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: theme.colors.error,
            color: "#fff",
          },

          success: {
            duration: 3000,
          },
        }}
      />
    </Container>
  );
}
