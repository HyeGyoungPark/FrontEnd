import React, {useState, useEffect} from "react";
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import ProfileImage from '../ProfileImage';
import ProfileContents from "../ProfileContents";
import YouTubePlayer from "../YoutubePlayer";
import axios from "axios";
import {Link} from "react-router-dom";

function ContentGrid(){

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/posts/list")
            .then(res => {
                setPostData(res.data);
            })
    }, []);


    if (postData) {
        let urlList = [];
        for (let i = 0; i < postData.length; i++) {
            urlList.push('/posts/' + postData[i].id);
        }

        return (
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '84vh',
                            border: '1px solid skyblue'
                        }}
                    >
                        <ProfileImage/> {/* 프사 */}
                        <ProfileContents/>
                        <YouTubePlayer/>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '84vh',
                            border: '1px solid skyblue',
                            padding: '1%'
                        }}
                    >

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3}>
                                {urlList.map((u, index) =>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '18vh',
                                            border: '1px solid skyblue',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            "&.MuiBox-root:hover":{
                                                backgroundColor: 'lightgray'
                                            }
                                        }}
                                    >
                                        <Link to={u}>
                                            [제목]{postData[index].title}
                                        </Link>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        );
    } else{
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '84vh',
                            border: '1px solid skyblue'
                        }}
                    >
                        <ProfileImage/> {/* 프사 */}
                        <ProfileContents/>
                        <YouTubePlayer/>

                    </Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '84vh',
                            border: '1px solid skyblue',
                            padding: '1%'
                        }}
                    >

                        <Grid container spacing={2}>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default ContentGrid;