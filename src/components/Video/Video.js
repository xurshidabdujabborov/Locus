import React, { useRef, useState } from "react";
import videos from "../../assets/video/post.mp4";
import past from "../../assets/img/video.png"
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Container, Grid } from "@mui/material";
import "./Video.css";
function Video(props) {
    const [play, setPlay] = useState(false);
    const videoIcon = useRef();

    return (
        <>
            <div className="center">
                <h2 className="title">How it works</h2>
                <p className="text">Spice up your space even simpler <br />
                    than you think</p>
            </div>
            <div className="video">
                <video src={videos} poster={past} ref={videoIcon}></video>
                <div className="texts">
                    <Container maxWidth="xl">
                        <Grid container >
                            <Grid items md={12}>
                                {play ? (
                                    <div
                                        className="videoPlayerIcons"
                                        onClick={() => {
                                            videoIcon.current.pause();
                                            setPlay(false);
                                        }}
                                    >
                                        <PauseIcon />
                                    </div>
                                ) : (
                                    <div
                                        className="videoPlayerIcons"
                                        onClick={() => {
                                            videoIcon.current.play();
                                            setPlay(true);
                                        }}
                                    >
                                        <PlayArrowIcon />
                                    </div>
                                )}
                            </Grid>
                        </Grid> 
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Video;