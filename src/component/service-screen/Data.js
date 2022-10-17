import { Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Data(){




    
   const [arr,setArr] = useState([]);


   const getData = ()=>{
    axios.get("https://fakestoreapi.com/products").
    then((success)=>{
        console.log(success.data)
        setArr([...success.data]);
    }).catch((err)=>{
        console.log(err);
    })
   }


   useEffect(()=>{
    getData()
   },[])
let navigate = useNavigate()
   function moveData(element){
    navigate("/Item",{
        state:element
        
    })

    console.log(element)
   }


return(
    
           <div>
        {/* <h1>DATA</h1> */}
        <Grid item container spacing={5}>
            {arr.map((element,i)=>{

                return(
                    <Grid item md={4} lg={3} sm={6} xs={12}>
                        <Card className="text-center text-dark bg-secondary mt-5 fw-bold" height = "400px" onClick={()=>moveData(element)} key={i}>
                            <Typography className="fw-bold text-white " variant="h4">{element.category}</Typography>

                            <CardMedia 
                            height = "600px"
                            // width = "500px"
                            component="img"
                            image= {element.image}
                            alt = "image"
                            // sx={{width:"200px"}}
                                                    
                            
                            
                            />
                              {/* <Typography variant="h6">{element.description}</Typography> */}
                              <Typography className="text-white" variant="h6">{element.title}</Typography>
                              <Typography className="text-white" variant="h6">{element.price}</Typography>
                        </Card>

                    </Grid>
                )

            })}

        </Grid>
    </div>
    // </body>
)



  

}








export default Data;