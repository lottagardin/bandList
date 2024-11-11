
import { Box, Typography } from "@mui/material";

function Listaus ({bandilista}) {



        if (bandilista.length === 0) {
            return (<p>Ei listattavaa</p>)
        }else {
            return(
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {bandilista.map((bandi, index) => (
                 <Box>
                    <Typography variant="h6">{bandi.nimi}</Typography>
                    <Typography variant="body1">
                      Paikkakunta: {bandi.paikkakunta}
                    </Typography>
                    <Typography variant="body1">Genre: {bandi.genre}</Typography>
                    <Typography variant="body1">
                      Ruoka-aine allergiat: {bandi.allergiat}
                    </Typography>
                    <Typography variant="body1">
                      Bändissä on vain miehiä: {bandi.vainmiehia ? 'Kyllä' : 'Ei'}
                    </Typography>
                    <Typography variant="body1">
                      Jäsenmäärä: {bandi.jasenmaara}
                    </Typography>
                </Box>
                ))}
              </Box>
            )
        
        }
        
        


    }



export default Listaus