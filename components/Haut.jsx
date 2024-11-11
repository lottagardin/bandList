import { useState } from "react";

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
                    <div>
                        {nimibandit.map (bandi => {
                            return (
                                <p> {bandi.nimi} <br/> 
                                Paikkakunta: {bandi.paikkakunta} <br/>
                                Genre: {bandi.genre} <br/>
                                Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                Jäsenmäärä: {bandi.jasenmaara} <br/>
                                </p>
                            )
                        })}
                    </div>
                )
            } else {
                return(
                    <div>
                        <p>Hakemallasi nimellä ei löytynyt bändejä.</p>
                    </div>
                )
            }
        }
    }

    const paikkakuntaBandit = () => {

        if (naytapk) {
            
            const paikkakuntaBandit = bandilista.filter(bandi => bandi.paikkakunta.toLowerCase() === kunta.toLowerCase())

            if (paikkakuntaBandit.length > 0 ){
                return(
                    <div>
                        {paikkakuntaBandit.map (bandi => {
                        return ( 
                            <p> 
                            {bandi.nimi} <br/> 
                            Paikkakunta: {bandi.paikkakunta} <br/>
                            Genre: {bandi.genre} <br/>
                            Ruoka-aine allergiat: {bandi.allergiat} <br/>
                            Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                            Jäsenmäärä: {bandi.jasenmaara} <br/>
                            </p>
                        )})}
                    </div>
            )
        } else {
            return (
                <div>
                <p> Hakemallasi paikkakunnalla ei löytynyt bändejä. </p>
                </div>
            )
    }
}


}

    const genreBandit = () => {

        if (naytaGenre) {
            const genreBandit = bandilista.filter(bandi => bandi.genre.toLowerCase() === genre.toLowerCase());

            if (genreBandit.length > 0) { 
                return(
                    <div>
                        {genreBandit.map (bandi => {
                            return (
                                <p> {bandi.nimi} <br/> 
                                Paikkakunta: {bandi.paikkakunta} <br/>
                                Genre: {bandi.genre} <br/>
                                Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                Jäsenmäärä: {bandi.jasenmaara} <br/>
                                </p>
                            )})}
                </div>
            )
        } else {
            return (
            <div>
                <p> Hakemallasi genrellä ei löytynyt bändejä. </p>
            </div>
        )
    }
}
    };


    const naytaMuutBandit = () => {


        if (naytaMuut) {
            const muutBandit = bandilista.filter(bandi => !bandi.vainmiehia);

            if (muutBandit.length > 0) {
                return (
              
                    <div>
                        <p><h3>Bändit, joissa on muitakin, kuin miehiä</h3></p>
                        {muutBandit.map (bandi => {
                            return (
                                    <p> 
                                    {bandi.nimi} <br/> 
                                    Paikkakunta: {bandi.paikkakunta} <br/>
                                    Genre: {bandi.genre} <br/>
                                    Ruoka-aine allergiat: {bandi.allergiat} <br/>
                                    Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                                    Jäsenmäärä: {bandi.jasenmaara} <br/>
                                    </p>
                                        )})}
                                    </div>
                                );
                            } else {
                                return (
                                <div>
                                    <p>Listassa ei ole bändejä, joissa soittaa muita kuin miehiä.</p>
                                </div>
                                )
                            }
                            }                           
                    };

return (
<>
<label> Etsi bändin nimellä: 
    <input type = "text" name = "bandinimi" value = {nimi} onChange = {muutaNimi}/>
    <input type = "button" value = "Etsi" onClick = {nimiNakyy}/> <br/>
</label>
<label>Etsi paikkakunnalla:
    <input type = "text" name = "pkunta" value = {kunta} onChange = {muutaKunta}/> 
    <input type = "button" value = "Etsi" onClick = {naytaPK}/> <br/>
</label>

<label>Etsi genrellä:
    <input type = "text" name = "genre" value = {genre} onChange = {muutaGenre}/>
    <input type = "button" value = "Etsi" onClick = {genreNakyy}/> <br/>
</label>

<label>Näytä bändit, joissa on muitakin kuin miehiä:
    <input type = "button" value = "Näytä" onClick = {muutKuinMiehet}/> <br/>
</label>





{paikkakuntaBandit()}
{genreBandit()}
{naytaMuutBandit()}
{nimiBandi()}
</>
)
}

export default Haut;



