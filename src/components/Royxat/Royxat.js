import React from 'react'
import { Grid, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "./Royxat.css"

function Royxat() {
    return (
        <div>
            <Container maxWidth="xl">
                <div className="Royxat">
                    <Grid container justifyContent={"center"}>
                        <Grid item md={8} sm={12} xs={12}>
                            <h2 className="title">Royxatdan otish</h2>
                            <form action="#">
                                <input type="text" placeholder='Login kiriting' />
                                <input type="text" placeholder='Parolingizni kiriting' />
                                <div className="pass">
                                    <RemoveRedEyeIcon />
                                </div>
                                <button>Tizinga Kirish</button>
                            </form>
                        </Grid>
                    </Grid>
                    <div className="icon">
                        <CloseIcon />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Royxat
