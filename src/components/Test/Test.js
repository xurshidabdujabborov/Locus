import React from 'react'
import { Container, Grid } from '@mui/material'
import klon from "../../assets/img/klanby.png"
import myon from "../../assets/img/myon.png"
import zal from "../../assets/img/zalora.png"
import geu from "../../assets/img/geu.png"
import car from "../../assets/img/card 4.png"
import "./Test.css"

function Test() {
    return (
        <div className='Test'>
            <Container maxWidth="xl">
                <h2 className="title">Testimonial</h2>
                <div className="foto">
                    <img src={klon} alt="" />
                    <img src={myon} alt="" />
                    <img src={zal} alt="" />
                    <img src={geu} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Test
