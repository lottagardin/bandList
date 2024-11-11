import {Tabs, Tab, Box, AppBar, IconButton, Menu, MenuItem, ListItemIcon,ListItemText, Drawer, ListItemButton, List, ListItem}  from "@mui/material";
import { useState } from "react";
import Lomake from "./Lomake";
import Listaus from "./Listaus";
import Etusivu from "./Etusivu";
import Haut from "./Haut";
import { Link } from "react-router-dom";

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FeedIcon from '@mui/icons-material/Feed';
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';


function Valilehdet () {
    const [value, setValue] = useState(0);
    const [bandilista, setBandilista] = useState([]);

    const paivitaLista= (bandilista) => {
    setBandilista(bandilista);
    console.log(bandilista);
}



const handleChange = (e, val) => {
  setValue(val);
}

return (

<Box>
            
<Tabs value={ value } onChange={ handleChange }>
<Tab label = 'Etusivu' component = {Link} to = '' icon = {<MenuIcon/>}/>
<Tab label='Lisää Bändi' component = {Link} to = 'lisaa' icon={<FeedIcon />} />
<Tab label='Bändilista' component = {Link} to = 'listaus' icon={<PersonIcon/>} />
<Tab label='Etsi bändejä' component = {Link} to = 'haut' icon={<InfoIcon/>} />
</Tabs>

{value === 0 && <Etusivu />}
{value === 1 && <Lomake paivitaLista = {paivitaLista} /> }
{ value === 2 && <Listaus bandilista = {bandilista}/> }
{ value === 3 && <Haut bandilista = {bandilista}/> }
</Box>
      
    )
   

}

export default Valilehdet;