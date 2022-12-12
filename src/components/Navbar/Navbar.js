import React from 'react'
import {Container , Grid } from "@mui/material"
import log from "../../assets/img/logo.png"
import log1 from "../../assets/img/logo 1.png"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid md={2} sm={12} xs={12}>
                        <div className="img">
                            <img src={log} alt="" />
                            <img src={log1} alt="" />
                        </div>
                    </Grid>
                    <Grid md={10} sm={12} xs={12}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Location</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <button>Sign Up</button>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </nav>
    )
}

export default Navbar

