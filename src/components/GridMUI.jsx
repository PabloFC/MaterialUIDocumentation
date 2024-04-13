import { Container, Grid } from '@mui/material'

const GridMUI = () => {
  return (
    <div>
        <Container>
            <Grid container  spacing={2}>
                <Grid item xs={12} md={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolorem veniam voluptatum asperiores perspiciatis iste eius optio! Possimus, porro distinctio?</p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolorem veniam voluptatum asperiores perspiciatis iste eius optio! Possimus, porro distinctio?</p>
                </Grid>
                <Grid item xs={12} md={12}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolorem veniam voluptatum asperiores perspiciatis iste eius optio! Possimus, porro distinctio?</p>
                </Grid>
            </Grid>
        </Container>
      
    </div>
  )
}

export default GridMUI
