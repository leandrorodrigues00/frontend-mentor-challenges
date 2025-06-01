import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CardContextProvider } from "./contexts/CardContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CardContextProvider>
          <Router />
        </CardContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
