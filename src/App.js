import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./app/routers/MainRouter";
const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#886701",
    },
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={primaryTheme}>
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
export default App;