import React from 'react'
import { Container, Grid } from '@mui/material'
import img from "../../assets/img/image 1.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid items md={6} sm={12} xs={12}>
                       <div className="left">
                       <h2 className="title">Get the inspiration
                            of interior design
                            here</h2>
                        <p className="text">
                            architecture not only about engineering, it even
                            lands to art and aesthetics. With us, you will get
                            a residentical design with an extraordinary touch
                            of art.
                        </p>
                        <button>Let’s go</button>
                       </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header
