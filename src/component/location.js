import { Grid } from "@mui/material";
import React from "react";
import image1 from "../image1.jpg"

function Location(){
    return(
        <Grid>
            <Grid>
                <Grid className="ok">
                    <p className="text-center p-5 text-white fw-bold karachi">Karachi</p>
                    <p className="fs-2 fw-bold">The city of light like a beacon for art,cuisine and stylish esteem </p>
                    <Grid>
                <button className="btn btn-dark fs-3 fw-nold text-white mt-5 ms-5">Things to do in Karachi</button>
                <button className="btn btn-dark fs-3 fw-nold text-white mt-5 ms-5">Find a neighbourhood</button>
            </Grid>
                </Grid>
                
            </Grid>
            


            <Grid>

                <h2 className="mt-5 fw-bold">Known for</h2>
                <hr/>


                <p className="text-center fs-3 p-4">Food , Do Darya ,Culture Diversity , Custom and Traditions, Burns Roads , city of the father of nation , hospality , city of light Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                
            </Grid>

          

        </Grid>
    )
}

export default Location;