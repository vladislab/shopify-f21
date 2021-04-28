import './App.css';
import Homepage from './components/Homepage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#f8f3e6',
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Homepage />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
