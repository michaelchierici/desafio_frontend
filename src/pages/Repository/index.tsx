import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import toast, { Toaster } from "react-hot-toast";

import RepoService from "../../api/services/Repositories/RepoService";

import { LANGUAGES_ICONS } from "../../constants/languages";
import { RepositoryProps } from "../../types/Repository";
import { LanguageProps } from "../../types/Languages";

import Loader from "../../components/Loader";

import DefaultIcon from "../../assets/icons/default.svg";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as Star } from "../../assets/components/star.svg";
import { Body, Container, Content, Footer, Header } from "./styles";
import Button from "../../components/Button";

export default function Repository() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { name, title } = useParams<{ name: string; title: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [repository, setRepository] = useState({} as RepositoryProps);

  const notify = (message: string) => toast(message);

  const getRepository = useCallback(async () => {
    setIsLoading(true);
    try {
      const repo = await RepoService.findDetails(name!, title!);
      setRepository(repo);
    } catch {
      notify("Repositório não encontrado!");
    } finally {
      setIsLoading(false);
    }
  }, [repository]);

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Content>
        <Header>
          <h1>{repository?.name}</h1>
          <label>
            {repository?.stargazers_count}
            <Star />
          </label>
        </Header>
        <Body>
          <div className="content-description">
            <h3>{repository?.description}</h3>
          </div>
        </Body>
        <Footer>
          <div className="container-tech">
            <div className="content-tech">
              <label>Linguagem: </label>
              <label>{repository?.language}</label>
            </div>

            <img
              src={
                LANGUAGES_ICONS[
                  repository?.language?.toLowerCase() as keyof LanguageProps
                ] ?? DefaultIcon
              }
            />
          </div>

          <div className="container-button">
            <a href={repository.html_url} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </Footer>
      </Content>
      <div className="content-button">
        <Button
          disabled={false}
          isLoading={false}
          size="small"
          onClick={() => navigate("/")}
          text="Voltar"
        />
      </div>
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
