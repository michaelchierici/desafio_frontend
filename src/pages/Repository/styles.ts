import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .content-button {
    padding: 15px 0;
  }
`;

export const Content = styled.main`
  width: 400px;
  padding: 15px 0;
  background-color: ${({ theme }) => theme.colors.card};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 2px 12px 0px black;

  ${mobile(css`
    width: 320px;
  `)}

  ${laptop(css`
    width: 500px;
  `)}

  ${desktop(css`
    width: 600px;
  `)}
`;

export const Header = styled.header`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${({ theme }) => theme.colors.text_primary};
    border: none;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.text_primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    border-bottom-style: solid;
  }
  label {
    color: ${({ theme }) => theme.colors.text_secondary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 15px 0;

    svg {
      height: 25px;
      margin-left: 5px;
    }
  }
`;

export const Body = styled.div`
  flex: 1;
  padding: 20px 15px;
  width: 90%;

  .content-description {
    border-radius: 8px;
    border: 1px solid #8599ff;
    padding: 20px;
    box-shadow: 0px 2px 12px 0px black;
    h3 {
      color: ${({ theme }) => theme.colors.text_secondary};
      font-weight: ${({ theme }) => theme.font.weight.regular};
      opacity: 0.8;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  .container-tech {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;

    svg {
    }

    a {
      cursor: pointer;
      text-decoration: none;
    }

    label {
      color: ${({ theme }) => theme.colors.text_secondary};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    }
    text-align: right;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 5px;
    }

    .content-tech {
      display: flex;
      flex-direction: column;
    }
  }

  .container-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;
