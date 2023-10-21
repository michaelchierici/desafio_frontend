import { createGlobalStyle, css } from "styled-components";

const sizes = {
  mobile: "320px",
  laptop: "1024px",
  desktop: "1480px",
};

export const mobile = (inner: any) => css`
  @media (min-width: ${sizes.mobile}) {
    ${inner};
  }
`;

export const laptop = (inner: any) => css`
  @media (min-width: ${sizes.laptop}) {
    ${inner};
  }
`;

export const desktop = (inner: any) => css`
  @media (min-width: ${sizes.desktop}) {
    ${inner};
  }
`;

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;

}

html, body {
  background-color: ${({ theme }) => theme.colors.background};

}

button {
  cursor: pointer;
}

`;
