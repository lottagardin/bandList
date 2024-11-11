import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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
    <>
    <form>
        <label>Nimi:
            <input type = "text" name = "nimi" value = {bandi.nimi} onChange = {muuta}/> <br/>
        </label>
        <label>Paikkakunta:
            <input type = "text" name = "paikkakunta" value = {bandi.paikkakunta} onChange = {muuta}/> <br/>
        </label>
        <label>Genre: 
            <input type = "text" name = "genre" value = {bandi.genre} onChange = {muuta}/> <br/>
        </label>
        <label>Jäsenmäärä:
            <input type = "number" name = "jasenmaara" value = {bandi.jasenmaara} onChange = {muuta}/> <br/>
        </label>
        <label>Ruoka-aine allergiat:
                <input type = "text" name = "allergiat" value = {bandi.allergiat} onChange = {muuta}/> <br/> <br/>
        </label>
       
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


        <br/>
 

    </form>

    <input type = "button" value = "Lisää Bändi" onClick = {lisaaBandi}/>




    </>
)
}

export default Lomake;

