import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalCss from "./utils/globalCss";
import defaultTheme from "./themes/defaultTheme";

import Main from "./pages/main";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <Main />
    </ThemeProvider>
  );
};

export default App;
