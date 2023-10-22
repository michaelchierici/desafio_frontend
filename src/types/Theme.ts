export type Theme = typeof theme;
const theme = {
  colors: {
    background: "#2B2B2B",

    text_primary: "#8599FF",
    text_secondary: "#FFFFFF",

    card: "#3F3D3D",
    button: "#16db65",

    success: "#16db65",
    error: "#A92039",

    hover: "#4E4849",
  },
  font: {
    size: {
      sm: 1.3,
      md: 2,
      lg: 3,
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 600,
    },
  },
};

export default theme;
