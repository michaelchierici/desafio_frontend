import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

export const Container = styled.aside`
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

export const Header = styled.div`
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

export const Section = styled.section`
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

export const Footer = styled.div`
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
