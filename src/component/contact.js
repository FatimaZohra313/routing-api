import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


function Contact(){
    const navigate = useNavigate()
    return (
        <Grid>
            <Grid>
                <Typography variant="h2" className="text-info mt-5 fw-bold">Contact Us</Typography>
                <hr/>
                <Typography variant="h5" className="fw-bold">For inquiries contact us at given Email address</Typography>
                
                <Chip className="p-4 mt-5 bg-secondary fs-2 text-white" sx={{backgroundColor:"#367461"}}  label='abc@gmail.com'/>
            </Grid>
            <Grid>
                <button onClick={()=>navigate('/')} className="btn btn-secondary mt-5 fs-4 px-5 ">Continue</button>
            </Grid>
        </Grid>
    )
}


export default Contact;