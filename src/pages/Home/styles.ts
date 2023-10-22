import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

interface Props {
  orderBy: boolean;
  pageSize: "full" | "paginate";
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  .btn-footer {
    display: flex;
    align-items: flex-end;
    border: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: white;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: ${({ theme }) => theme.font.size.sm}em;
    height: 50px;
    padding: 10px;

    &:hover {
      color: ${({ theme }) => theme.colors.text_secondary};
      border-bottom-color: ${({ theme }) => theme.colors.text_primary};
    }
    transition: all 0.2s ease-in;
  }

  ${mobile(css`
    flex-direction: column;
    justify-content: space-between;
  `)}

  ${laptop(css`
    flex-direction: column;
    justify-content: space-between;
  `)}

  ${desktop(css`
    flex-wrap: wrap;
    justify-content: center;
  `)}
`;

export const ProfileContainer = styled.aside`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.text_primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 10px 0;
  }

  ${mobile(css`
    width: 350px;
  `)}

  ${laptop(css`
    width: 600px;
  `)}

  ${desktop(css`
    width: 600px;
  `)}
`;

export const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  height: 350px;
  img {
    width: 296px;
    height: 296px;
    border-radius: 50%;
  }
`;

export const ProfileSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    margin: 10px;
  }

  h2 {
    padding-left: 5px;
    font-size: ${({ theme }) => theme.font.size.sm}em;

    font-weight: ${({ theme }) => theme.font.weight.regular};

    color: ${({ theme }) => theme.colors.text_secondary};
    opacity: 0.6;
  }

  .email-container {
    border: 1px solid #3f3d3d;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    height: 40px;
    flex: 1;

    svg {
      height: 23px;
    }
  }

  .bio-container {
    border: 1px solid #3f3d3d;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 350px;
    height: 140px;
    flex: 1;

    h2 {
      flex: 1;
    }
  }
`;

export const ProfileFooter = styled.div`
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 370px;
  height: 80px;

  label {
    font-family: ${({ theme }) => theme.font.weight.regular};
    opacity: 0.6;
    padding: 5px 0;
  }

  span {
    font-family: ${({ theme }) => theme.font.weight.bold};
  }

  .container-followers,
  .container-following {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text_secondary};
    height: 100%;
    width: 100%;
  }
  .container-followers {
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #8f8f8f;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  flex-direction: column;
  padding: 0 10px;

  ${mobile(css`
    width: 100%;
    flex-direction: column;
  `)}

  ${laptop(css`
    width: 100%;
  `)}

  ${desktop(css`
    width: 60%;
    height: 80%;
    flex-wrap: nowrap;
    overflow: hidden;
    flex-direction: column;
  `)}
`;

export const CardContent = styled.div<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  overflow: hidden;

  overflow-y: ${({ pageSize }) => pageSize === "full" && "scroll"};
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fefefe;
    border-radius: 10px;
    width: 3px;
    height: 3px;
  }
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px black;
  padding: 10px 0;
  margin: 5px 0;
`;

export const SearchContainer = styled.div<Partial<Props>>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .orderby-star {
    transform: ${({ orderBy }) =>
      orderBy ? "rotate(180deg)" : "rotate(0deg)"};
  }

  .search-user {
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.hover};
    }

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        transform: none;
      }
    }
  }
  svg {
    width: 40px;
    padding: 0 5px;
    transition: transform 0.2s ease-in;

    cursor: pointer;
  }
`;

export const Footer = styled.div`
  width: 100px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: white;
  font-size: ${({ theme }) => theme.font.size.sm}em;
`;
