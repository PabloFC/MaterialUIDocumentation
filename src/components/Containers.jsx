import { Button, Container,  Typography, Box } from "@mui/material"

import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
const Containers = () => {
  return (

    <>
    <Container maxWidth="lg" sx={{boxShadow: 3, pb: 2}}>
      <h1>App</h1>
      <Button variant="contained">Mi primer Boton</Button>
    </Container>

    <Container maxWidth="sm" sx={{border:1, pb: 2}}>
      <h1>App</h1>
      <Typography color="secondary" variant="h5" sx={{textAlign: 'center', mb: 2}}>Typografia con componente</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="contained">Mi primer Boton</Button>
      </Box>
    </Container>

    <Container maxWidth="lg" sx={{border:1, pb: 2}}>
      <h1>App</h1>
      <Typography  variant="h5" sx={{textAlign: 'center', mb: 2}}>Typografia con componente</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Button endIcon={<DeleteIcon />} color="error" variant="contained">Mi primer Boton</Button>
      <Button startIcon={<CheckIcon />} color="success" variant="outlined">Mi segundo Boton</Button>
      </Box>
    </Container>
    
    </>
  )
}

export default Containers
