import "./App.css";
import Homepage from "./components/Homepage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { loadState } from "./utils/localStorage";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  const localMode = loadState("nightMode");
  const modeState = typeof localMode === "boolean" ? localMode : true;
  const [nightMode, setNightMode] = useState(modeState);

  const handleModeSwitch = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={`App App${nightMode ? "-night" : "-day"}`}>
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Homepage switchMode={handleModeSwitch} nightMode={nightMode} />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
