import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import img4 from "../img4.png"


function About(){
    const navigate = useNavigate()
    return (
       <Grid>
        <Grid>
            <Typography variant="h2" className="text-info mt-5 fw-bold">About Us</Typography>
            <hr/>
            <Typography variant="h4">"Our mission is to serve you with the accuracy"</Typography>
            <Typography className="fw-bold" variant="h5">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</Typography>
            <Typography className="fw-bold mt-5" variant="h5">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</Typography>
            <Typography className="fw-bold mt-5" variant="h3">"You used to need developers to do all this. Not anymore."</Typography>
            <Grid><img className="mt-4" src={img4}/></Grid>
            <button className="btn btn-secondary mt-5 fs-4 px-5 " onClick={()=>navigate('/')}>Continue</button>
        </Grid>
       </Grid>
    )
}


export default About;