import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import useFirebase from "./pages/Login/useFirebase";

function App() {
  const { user } = useFirebase()
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>

          <Main theme={chosenTheme} user={user} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
