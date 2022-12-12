import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card.png"
import "./Mision.css"

function Mision() {
    return (
        <div className='Mision'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <img src={car} alt="" />
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <h4>Our mission is to
                                deliver aesthetic visual
                                for your home</h4>
                            <p className="text">By applying bacis psychology principles,
                                we are going to explain how perception
                                works and how we can use this understanding
                                to maximise the space that we occupy in
                                our homes.</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Mision
