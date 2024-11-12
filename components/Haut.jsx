import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function Haut ({bandilista}) {

    const [kunta, setKunta] = useState('');
    const [naytapk, setNaytapk] = useState (false);
    const [genre, setGenre] = useState('');
    const [naytaGenre, setNaytaGenre] = useState(false);
    const [naytaMuut, setNaytaMuut] = useState(false);
    const [nimi, setNimi] = useState('');
    const [naytaNimi, setNaytaNimi] = useState(false);

    const muutaNimi = (e) => {
        setNaytapk(false);
        setKunta('');
        setNaytaMuut(false);
        setNaytaGenre(false);
        setGenre('');
        setNaytaNimi(false);
        setNimi(e.target.value);
    }

    const nimiNakyy = () => {
        setNaytaNimi(true);
        setNaytapk(false);
        setNaytaMuut(false);
        setNaytaGenre(false);
    }

    const muutaKunta = (e) => {
        setNaytapk(false);
        setGenre('');
        setNaytaMuut(false);
        setNaytaGenre(false);
        setNaytaNimi(false);
        setNimi('');
        setKunta(e.target.value);
    }

    const naytaPK = () => {
        setNaytapk(true);
        setNaytaGenre(false);
        setNaytaMuut(false);
        setNaytaNimi(false);
    }

    const muutaGenre = (e) => {
        setNaytapk(false);
        setKunta('');
        setNaytaMuut(false);
        setNaytaGenre(false);
        setNaytaNimi(false);
        setNimi('');
        setGenre(e.target.value);
    }

    const genreNakyy = () => {
        setNaytaGenre(true);
        setNaytapk(false);
        setNaytaMuut(false);
        setNaytaNimi(false);
    }

    const muutKuinMiehet = () => {
        setNaytaMuut(true);
        setNaytaGenre(false);
        setGenre('');
        setNaytapk(false);
        setKunta('');
        setNaytaNimi(false);
        setNimi('');
    }


    const nimiBandi = () => {
        if (naytaNimi) {
            const nimibandit = bandilista.filter(bandi => bandi.nimi.toLowerCase() === nimi.toLowerCase())

            if (nimibandit.length > 0) {
                return (
                    <Box>
                        {nimibandit.map (bandi => {
                            return (
                                <Typography variant='body1'> {bandi.nimi} <br/>
                                Paikkakunta: {bandi.paikkakunta} <br/>
                                Genre: {bandi.genre} <br/>
                                Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                Jäsenmäärä: {bandi.jasenmaara} <br/>
                                </Typography> 
                            )
                        })}
                    </Box>
                )
            } else {
                return(
                    <Box>
                        <Typography variant='body1'> Hakemallasi nimellä ei löytynyt bändejä.</Typography>
                   </Box>
                )
            }
        }
    }

    const paikkakuntaBandit = () => {

        if (naytapk) {
            
            const paikkakuntaBandit = bandilista.filter(bandi => bandi.paikkakunta.toLowerCase() === kunta.toLowerCase())

            if (paikkakuntaBandit.length > 0 ){
                return(
                    <Box>
                        {paikkakuntaBandit.map (bandi => {
                        return ( 
                            <Typography variant='body1'> 
                            {bandi.nimi} <br/> 
                            Paikkakunta: {bandi.paikkakunta} <br/>
                            Genre: {bandi.genre} <br/>
                            Ruoka-aine allergiat: {bandi.allergiat} <br/>
                            Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                            Jäsenmäärä: {bandi.jasenmaara} <br/>
                            </Typography>
                        )})}
                 </Box>
            )
        } else {
            return (
                <Box>
                <Typography variant='body1'>  Hakemallasi paikkakunnalla ei löytynyt bändejä. </Typography>
                </Box>
            )
    }
}


}

    const genreBandit = () => {

        if (naytaGenre) {
            const genreBandit = bandilista.filter(bandi => bandi.genre.toLowerCase() === genre.toLowerCase());

            if (genreBandit.length > 0) { 
                return(
                    <Box>
                        {genreBandit.map (bandi => {
                            return (
                                <Typography variant='body1'> {bandi.nimi} <br/> 
                                Paikkakunta: {bandi.paikkakunta} <br/>
                                Genre: {bandi.genre} <br/>
                                Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                Jäsenmäärä: {bandi.jasenmaara} <br/>
                                </Typography>
                            )})}
               </Box>
            )
        } else {
            return (
            <Box>
                <p> Hakemallasi genrellä ei löytynyt bändejä. </p>
            </Box>
        )
    }
}
    };


    const naytaMuutBandit = () => {


        if (naytaMuut) {
            const muutBandit = bandilista.filter(bandi => !bandi.vainmiehia);

            if (muutBandit.length > 0) {
                return (
              
                    <Box>
                        <Typography variant='h3'> Bändit, joissa on muitakin, kuin miehiä</Typography>
                        {muutBandit.map (bandi => {
                            return (
                                <Typography variant='body1'> 
                                    {bandi.nimi} <br/> 
                                    Paikkakunta: {bandi.paikkakunta} <br/>
                                    Genre: {bandi.genre} <br/>
                                    Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                    Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                    Jäsenmäärä: {bandi.jasenmaara} <br/>
                                    </Typography>
                                        )})}
                                    </Box>
                                );
                            } else {
                                return (
                                <Box>
                                        <Typography variant='body1'> Listassa ei ole bändejä, joissa soittaa muita kuin miehiä.</Typography>
                                </Box>
                                )
                            }
                            }                           
                    };

return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <TextField
        label="Etsi bändin nimellä"
        name="bandinimi"
        value={nimi}
        onChange={muutaNimi}
        sx={{backgroundColor: 'orange'}}
        variant="outlined"
      />
      <Button variant="contained" onClick={nimiNakyy}>
        Etsi
      </Button>
    </Box>

    <Box>
      <TextField
        label="Etsi paikkakunnalla"
        name="pkunta"
        value={kunta}
        onChange={muutaKunta}
        sx={{backgroundColor: 'orange'}}
        variant="outlined"
      />
      <Button variant="contained" onClick={naytaPK}>
        Etsi
      </Button>
    </Box>

    <Box>
      <TextField
        label="Etsi genrellä"
        name="genre"
        value={genre}
        onChange={muutaGenre}
        sx={{backgroundColor: 'orange'}}
        variant="outlined"
      />
      <Button variant="contained" onClick={genreNakyy}>
        Etsi
      </Button>
    </Box>

    <Box>
      <Button variant="contained" onClick={muutKuinMiehet}>
        Näytä bändit, joissa on muitakin kuin miehiä
      </Button>
    </Box>




{paikkakuntaBandit()}
{genreBandit()}
{naytaMuutBandit()}
{nimiBandi()}
</Box>
)
}

export default Haut;



