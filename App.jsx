
import Etusivu from "./components/Etusivu";
import Lomake from "./components/Lomake";
import Haut from "./components/Haut";
import Listaus from "./components/Listaus";
import Valilehdet from "./components/Valilehdet";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { amber, orange, brown } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const theme = createTheme ({
  palette: {
    primary: {main: brown[800], contrastText: '#FFFFFF'},
    secondary: {main: orange[900], contrastText: '#FFFFFF'},
    text: {primary: brown[800], secondary: orange[900], contrastText: '#FFFFFF'},
    background: {default: amber[500]}
  },
  typography: {
    fontFamily: "'Bebas Neue'",
  }
});


function App() {


  return (
    <BrowserRouter>
    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <Routes >
      <Route path = '/' element = {<Valilehdet/>}>
      <Route path = 'etusivu' element = {<Etusivu/>}/>
      <Route path = 'lisaa' element = {<Lomake/>}/>
      <Route path = 'listaus' element = {<Listaus/>}/>
      <Route path = 'haut' element = {<Haut/>}/>
      </Route>
    </Routes>
    </ThemeProvider>


    </BrowserRouter>
  )
}


export default App
