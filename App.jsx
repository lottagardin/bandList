
import Etusivu from "./components/Etusivu";
import Lomake from "./components/Lomake";
import Haut from "./components/Haut";
import Listaus from "./components/Listaus";
import Valilehdet from "./navigation/Valilehdet";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { amber, orange, brown } from "@mui/material/colors";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";



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

const router = createBrowserRouter([
  { element: <Valilehdet/>,
    children:[
      {path: '/', element: <Etusivu/>},
      {path: 'lisaa', element: <Lomake/>},
      {path: 'listaus', element: <Listaus/>},
      {path: 'haut', element: <Haut/>},
    ]
  },
]);


function App() {


  return (

    <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <RouterProvider router = {router}/>
    </ThemeProvider>

  )
}


export default App
