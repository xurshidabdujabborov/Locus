import React from 'react'
import { Container, Grid } from '@mui/material'
import "./Bottom.css"

function Bottom() {
    return (
        <div className='Bottom'>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid items md={5} sm={12} xs={12}>
                        <div className="colomun">
                            <h2 className="title">Contact Us</h2>
                            <p className="text">Have any questions? Want help <br />
                                before getting started?</p>
                        </div>
                    </Grid>
                    <Grid items md={7} sm={12} xs={12}>
                        <form action="#">
                            <p>Full name</p>
                            <p>Email address</p>
                            <p>Description</p>
                            <div className="bot">
                            <button>Send now</button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Bottom
