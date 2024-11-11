import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TextField, Button, Box } from '@mui/material';

import { useEffect } from 'react';


function Lomake ({paivitaLista}) {
const [bandi, setBandi] = useState( { nimi: '', paikkakunta: '', genre: '', allergiat: '', vainmiehia:false, jasenmaara: 0}, );
const [onkoVainMiehia, setOnkoVainMiehia] = useState(false);
const [bandilista, setBandilista] = useState ([]);

const muuta = (e) => {
    setBandi({...bandi, [e.target.name]: e.target.value});
};

const muutaVainMiehia = (e) => {
   const miehiaArvo = e.target.value === 'true';
   setOnkoVainMiehia(miehiaArvo);
    setBandi({...bandi, vainmiehia: miehiaArvo});
};

const lisaaBandi = () => {
    
    setBandilista( bandilista => [...bandilista, bandi]);
    paivitaLista(bandilista);
    console.log(bandilista);
    setBandi({ nimi: '', paikkakunta: '', genre: '', jasenmaara: 0, allergiat: '', vainmiehia: false} );
};

useEffect (() => {
    paivitaLista(bandilista);
}, [bandilista]);

return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box >
    <TextField
        label="Nimi"
        name="nimi"
        value={bandi.nimi}
        onChange={muuta}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'orange'}}
      />

      <TextField
        label="Paikkakunta"
        name="paikkakunta"
        value={bandi.paikkakunta}
        onChange={muuta}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'orange'}}
    
      />

      <TextField
        label="Genre"
        name="genre"
        value={bandi.genre}
        onChange={muuta}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'orange'}}

      />

      <TextField
        label="Jäsenmäärä"
        type="number"
        name="jasenmaara"
        value={bandi.jasenmaara}
        onChange={muuta}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'orange'}}
      />

      <TextField
        label="Ruoka-aine allergiat"
        name="allergiat"
        value={bandi.allergiat}
        onChange={muuta}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'orange'}}
      />
       
        <FormControl>
            <FormLabel>Onko bändissä vain miehiä?</FormLabel>
                <RadioGroup 
                row
                value = {onkoVainMiehia}
                onChange = {muutaVainMiehia}
               >
                    <FormControlLabel value="true" control={<Radio />} label="Kyllä" />
                    <FormControlLabel value="false" control={<Radio />} label="Ei" /> 
                </RadioGroup>
            </FormControl>


    
 

        </Box>

    <Button variant="contained" onClick = {lisaaBandi}>Lisää bändi</Button>




    </Box>
)
}

export default Lomake;

