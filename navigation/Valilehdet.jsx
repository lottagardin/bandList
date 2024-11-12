import {Tabs, Tab, Box}  from "@mui/material";
import { useState } from "react";
import Lomake from "../components/Lomake";
import Listaus from "../components/Listaus";
import Etusivu from "../components/Etusivu";
import Haut from "../components/Haut";
import { Link } from "react-router-dom";


import FeedIcon from '@mui/icons-material/Feed';
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