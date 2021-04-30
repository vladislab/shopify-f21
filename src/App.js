import "./App.css";
import Homepage from "./components/Homepage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  const [nightMode, setNightMode] = useState(true);

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
