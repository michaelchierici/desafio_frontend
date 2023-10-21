import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles";
import theme from "./types/Theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
