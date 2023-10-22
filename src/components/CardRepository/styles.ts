import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

export const Container = styled.button`
  width: 400px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 2px 12px 0px black;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    h3 {
      color: ${({ theme }) => theme.colors.text_primary};
      opacity: 1;
    }
  }
  transition: all 0.2s ease-in;

  cursor: pointer;

  ${mobile(css`
    width: 350px;
    height: 150px;

    margin: 10px;
  `)}

  ${laptop(css`
    width: 400px;
    height: 150px;
  `)}

  ${desktop(css`
    width: 400px;
    height: 150px;
  `)}
`;

export const Header = styled.header`
  width: 100%;
  height: 30px;
  padding: 8px;
  h3 {
    color: ${({ theme }) => theme.colors.text_secondary};
    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-align: left;
    opacity: 0.8;
  }
`;

export const Content = styled.section`
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  img {
    padding: 5px;
  }

  label {
    color: ${({ theme }) => theme.colors.text_secondary};
    font-size: 22px;
    padding: 5px;
    svg {
      height: 25px;
    }
  }
`;
