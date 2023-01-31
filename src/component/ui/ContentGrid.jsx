import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
//import theme from "../../../theme";
import { useNavigate } from "react-router-dom";
import { Container, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from '@mui/material';
import { Input } from "@mui/material";
import ContentBox from "./ContentBox";



function ContentGrid(){

    const [visible, setVisible] = useState(false); //-> delay 없애는 것 필요
    const move = useRef(); // 이런 input , button component에만 적용됨
    const stay = useRef(); // focus 이동시킬 때 사용

    const Move = () => {
        setVisible(true); // 글 자세히 보기 창과 댓글 쓰기 창을 보여줌
        move.current.focus(); // focus 이동
    };

    const Stay = () => {
        setVisible(false);
        stay.current.focus();
    };
    
    
    return(
        <Grid container spacing={6}>
            <Grid item xs={12} sm={6.6}>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '86vh',
                                border: '1px solid skyblue'
                            }}
                            //ref={stay} -> 여기쓰면 적용안됨
                        >
                            <Button
                                ref={stay} // -> 여기써야 적용됨
                            >
                                profile
                            </Button>
                            profile
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Box
                            sx={{
                                width: '100%',
                                height: '84vh',
                                border: '1px solid skyblue',
                                padding : '1%'
                            }}
                        >

                            <Grid container spacing={2}>
                                {/* 하위 component로 전달할 함수 매개변수로 주기 */}
                                <ContentBox Move={Move} ></ContentBox> 
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>

                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>

                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>

                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                                <ContentBox Move={Move} ></ContentBox>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            {
                visible 

                && 

                <Grid item xs={12} sm={5.4}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '86vh',
                            border: '1px solid skyblue',
                            //margin: '3%'
                        }}
                        //ref={move}
                    >
                        <Button
                            style={{
                                float: 'right',
                                margin: '0.5%',
                                padding: 0
                            }}
                            ref={move} //이런 입력 , button component에만 적용됨
                            onClick ={Stay}
                        >
                            X
                        </Button>
                    </Box>
                </Grid>
            }
        </Grid>
    );

}

export default ContentGrid;