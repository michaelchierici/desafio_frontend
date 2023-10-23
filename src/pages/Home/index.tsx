import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import UserService from "../../api/services/User/UserService";

import {
  Container,
  Content,
  SearchContainer,
  CardContainer,
  CardContent,
  Footer,
} from "./styles";

import CardRepository from "../../components/CardRepository";
import Loader from "../../components/Loader";
import { Input } from "../../components/Input";

import { ReactComponent as Search } from "../../assets/components/search.svg";
import { ReactComponent as Arrow } from "../../assets/components/arrow.svg";
import { ReactComponent as NotFound } from "../../assets/components/notFound.svg";
import { ReactComponent as Prev } from "../../assets/components/prev.svg";
import { ReactComponent as Next } from "../../assets/components/next.svg";

import { UserProps } from "../../types/User";
import { RepositoryProps } from "../../types/Repository";

import delay from "../../utils/delay";
import Spinner from "../../components/Spinner";
import Profile from "../../components/Profile";

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [initialLoading, setInitialLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const [orderBy, setOrderBy] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState({} as UserProps);
  const [repositories, setRepositories] = useState([] as RepositoryProps[]);
  const [page, setPage] = useState(1);
  const [take, setTake] = useState<number | undefined>(6);
  const [pageSize, setPageSize] = useState<"paginate" | "full">("paginate");

  const repositoriesNotExists = Object.keys(repositories).length === 0;

  const notify = (message: string) => toast(message);

  const handleSearchUser = useCallback(async () => {
    if (!searchTerm) {
      return notify("Nome de usuário é obrigatório!");
    }
    setSearchLoading(true);
    try {
      const user = await UserService.findDetails(searchTerm.replace(/ /g, ""));
      setUser(user);
    } catch {
      notify(`Usuário ${searchTerm} não encontrado!`);
    } finally {
      setSearchLoading(false);
    }
  }, [user, searchTerm]);

  const getUsersRepositories = useCallback(async () => {
    try {
      const repos: RepositoryProps[] = await UserService.findRepositories(
        searchTerm.replace(/ /g, ""),
        page,
        take
      );

      if (repos.length === 0) {
        setPage(1);
      }

      setRepositories(repos);
    } catch {
      notify(`Usuário ${searchTerm} não possui repositórios!`);
    }
  }, [user, searchTerm, page, take]);

  const repositoriesOrderByStars = useMemo(() => {
    const copyArray = [...repositories];
    const sorted = copyArray.sort((a, b) =>
      orderBy
        ? a.stargazers_count - b.stargazers_count
        : b.stargazers_count - a.stargazers_count
    );

    return sorted;
  }, [repositories, orderBy]);

  useEffect(() => {
    if (pageSize === "full") {
      setTake(undefined);
    } else {
      setTake(6);
    }
  }, [pageSize]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getUsersRepositories();
    }
  }, [user, page, take]);

  useEffect(() => {
    async function fakeLoading() {
      await delay(800);
      setInitialLoading(false);
    }
    fakeLoading();
  }, []);

  function handleChangeOrderBy() {
    setOrderBy((prevState) => !prevState);
  }

  function handleChangePageSize() {
    setPage(1);
    setPageSize((prevState) =>
      prevState === "paginate" ? (prevState = "full") : "paginate"
    );
  }

  function handleGoToRepositoryInfo(repository: RepositoryProps) {
    navigate(`repo/${repository.full_name}`);
  }
  return (
    <Container>
      <Loader isLoading={initialLoading} />
      <Content>
        <Profile user={user} />

        <CardContainer>
          <SearchContainer orderBy={orderBy}>
            <Input
              placeholder="Busque o nome do usuário no GitHub..."
              onChange={(event) => setSearchTerm(event.target.value)}
              value={searchTerm}
            />
            {searchLoading ? (
              <Spinner size={30} color={theme.colors.text_primary} />
            ) : (
              <Search
                className="search-user"
                onClick={handleSearchUser}
                fill={theme.colors.text_primary}
              />
            )}
            <Arrow
              className="orderby-star"
              onClick={handleChangeOrderBy}
              fill={theme.colors.text_primary}
            />
          </SearchContainer>
          <CardContent pageSize={pageSize}>
            {repositoriesNotExists ? (
              <NotFound />
            ) : (
              <>
                {repositoriesOrderByStars.map((repository, index) => (
                  <CardRepository
                    key={index}
                    name={repository.name}
                    language={repository.language?.toLowerCase()}
                    stars={repository.stargazers_count}
                    onClick={() => handleGoToRepositoryInfo(repository)}
                  />
                ))}
              </>
            )}
          </CardContent>
          {repositoriesNotExists ||
            (pageSize === "paginate" && (
              <Footer>
                <Prev
                  onClick={() =>
                    page > 1 && setPage((prevState) => prevState - 1)
                  }
                />
                {page}
                <Next onClick={() => setPage((prevState) => prevState + 1)} />
              </Footer>
            ))}
          {!repositoriesNotExists && (
            <button className="btn-footer" onClick={handleChangePageSize}>
              {pageSize === "paginate" ? `Ver todos` : "Ver paginado"}
            </button>
          )}
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
