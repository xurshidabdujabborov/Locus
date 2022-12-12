import React from 'react'
import { Container, Grid } from '@mui/material'
import car from "../../assets/img/card 1.png"
import car1 from "../../assets/img/card 2.png"
import car2 from "../../assets/img/card 3.png"
import "./Project.css"

function Project() {
    return (
        <div className='Project'>
            <Container maxWidth="xl">
                <h2 className="title">Our project </h2>
                <p className="text">Introducing our first official project</p>
                <Grid container>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="box">
                            <h4>Project Livingroom</h4>
                            <p>A simple guide to create the perfect livingro-
                                om for . Night Watc works beautifully in a wi-
                                de gamut of arrangements.</p>
                            <img src={car} alt="" />
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="card">
                            <img src={car1} alt="" />
                            <h4>Project workspace</h4>
                            <p>A simple guide to create the perfect livingro-
                                om for . Night Watc works beautifully in a wi-
                                de gamut of arrangements.</p>
                        </div>
                    </Grid>
                    <Grid md={4} sm={12} xs={12}>
                        <div className="box">
                            <h4>Library</h4>
                            <p>A simple guide to create the perfect livingro-
                                om for . Night Watc works beautifully in a wi-
                                de gamut of arrangements.</p>
                                <img src={car2} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Project
