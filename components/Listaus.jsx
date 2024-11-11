

function Listaus ({bandilista}) {



        if (bandilista.length === 0) {
            return (<p>Ei listattavaa</p>)
        }else {
            return(
                <div>
                    {bandilista.map (bandi => {
                        return (
                            <p> {bandi.nimi} <br/> 
                            Paikkakunta: {bandi.paikkakunta} <br/>
                            Genre: {bandi.genre} <br/>
                            Ruoka-aine allergiat: {bandi.allergiat} <br/>
                            Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'} <br/>
                            Jäsenmäärä: {bandi.jasenmaara} <br/>
                            </p>
                        );
                    })
                }
                </div>
            )
        
        }
        
        


    }



export default Listaus