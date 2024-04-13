import styled from "@emotion/styled"
import { Box, Button, Paper, Typography } from "@mui/material"


const CardsMUI = () => {

    const Img=styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    })

  return (
    <Paper 
    sx={{
        display:"flex",
        justifyContent:"center !important",
        alignItems:"center",
        gap:4, 
        overflow:"hidden",
        m:5,
        }}>
        <Img src="https://via.placeholder.com/200"/>
        <Box sx={{flexGrow:1, display:"grid", gap:2}}>
            <Typography variant="h4">Card Title</Typography>
            <Typography variant="body1">Product description</Typography>
            <Button variant="contained">Add Card</Button>
        </Box>
        <Box 
        sx={{mr:2}}
        component="p">
            19.99€
        </Box>
    </Paper>
  )
}

export default CardsMUI
