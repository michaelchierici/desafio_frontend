export type Theme = typeof theme;
const theme = {
  colors: {
    background: "#1D1E18",

    text_primary: "#476CFF",
    text_secondary: "#FFFFFF",

    card: "",
    button: "",

    success: "#16db65",
    error: "#C9235F",

    hover: "#C9235F",
  },
  font: {
    size: {
      sm: 1.5,
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
