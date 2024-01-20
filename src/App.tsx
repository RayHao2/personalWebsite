import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}

export default App;