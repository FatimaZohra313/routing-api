import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../img1.png"
import img2 from "../img2.png"
import img3 from "../img3.png"


function Home(){
    return (
        <Grid >
      <Grid>
        <Typography className="mt-5" variant="h2">The no-code landing page <br/> of your dreams</Typography>
      </Grid>
      <Grid>
        <Typography className="mt-5" variant="h4">Rustle up a beautiful landing page in minutes, and <br/> rake in the leads like a boss</Typography>

      </Grid>
      <Grid>
        <Typography> <Chip sx={{ backgroundColor : 'black', color:"white", padding: "5px",paddingY:"5px",fontSize: "large"}} className="mt-5 p-4" label="Get Started it's Free" variant="filled"/></Typography>
      </Grid>
      <Grid>
      <img className="mt-5 w-50"  src={img1}/>

      </Grid>
      <Grid>
        <Typography className="mt-5" variant="h4">"The conversion rate of the typeform is at 10.6%.<br/> For the pace at which I executed this,<br/> it beats any smart landing page you could make."</Typography>
      </Grid>
      <Grid>
        <img className="mt-2" src={img2} />
        <Typography variant="h5">Florent Schmah</Typography>
      </Grid>
      <Grid className="maindiv mt-5">
        <Grid className="mt-5"><img src={img3}/></Grid>
        <Grid>
            <Typography className="mt-5 fw-bold" variant="h3">Get started in minutes </Typography>
            <Typography className="mt-3" variant="h4">Dive right in with a template that’s ready to go, <br/> and launch your page without a line of code.<br/> Typeforms can rank on Google, and you can <br/> redirect to any URL upon completion. </Typography>
        </Grid>
      </Grid>

      <Grid className="footer">
        <Grid>
            <Typography className="p-5" variant="h3" sx={{color:"white"}}>Time to launch that landing page</Typography>
        </Grid>
        <Grid>
        <Typography> <Chip sx={{ backgroundColor : 'white', color:"black", padding: "5px",paddingY:"5px",fontSize: "large"}} className="mt-3 p-4" label="Get Started it's Free" variant="filled"/></Typography>
      </Grid>


      </Grid>

       
       
       
   
        </Grid>
    )
}


export default Home;