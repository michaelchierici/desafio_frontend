import styled, { css } from "styled-components";
import { desktop, laptop, mobile } from "../../styles";

export const Container = styled.div`
  width: 400px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;

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
  height: 80px;
  h1 {
    color: ${({ theme }) => theme.colors.text_primary};
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const Content = styled.section`
  background-color: royalblue;
`;
