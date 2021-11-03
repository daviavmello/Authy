import React, { useState } from "react";
import { ColorModeContext } from "./contexts/colorContext";

import GlobalStyle from "./style/GlobalStyle";
import { Main } from "./components/Main";
import { Navbar } from "./components/navbar/Navbar";
import { darkTheme, lightTheme } from "./style/colors";
import { ThemeProvider } from "styled-components";

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<string>(
    localStorage.getItem("color-mode") || "dark"
  );

  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <ColorModeContext.Provider
        value={{
          colorMode,
          setColorMode,
        }}
      >
        <GlobalStyle />
        <Navbar />
        <Main />
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
