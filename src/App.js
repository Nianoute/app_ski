import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./app/routers/MainRouter";
import MainLayout from "./app/layout/MainLayout";

const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#886701",
    },
  }
});

function App() {
  return (
      <ThemeProvider theme={primaryTheme}>
        <BrowserRouter>
          <MainLayout>
            <MainRouter />
          </MainLayout>   
        </BrowserRouter>
      </ThemeProvider>
  );
}
export default App;