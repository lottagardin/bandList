import { Box, Typography} from "@mui/material";


function Etusivu () {



return (


<Box component='h1' sx={{ backgroundColor:'orange', color: 'brown', textAlign: 'center'}}>
   <Typography variant="h2">Oranssilla soittaneet bändit </Typography> 
   <Typography variant="body1">Tämä sivusto pitää sisällään Oranssilla soittaneet bändit. Voit lisätä bändin, selata listaa Oranssilla soittaneista bändeistä tai etsiä bändejä listasta.</Typography>
    </Box>
)
   
}

export default Etusivu;