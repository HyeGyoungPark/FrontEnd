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
    //const visible = true;
    //const [focus, setFocus] = useState(true);
    const move = useRef();
    const stay = useRef();

    /*const Focus = () => {
        if(focus){
            //setVisible(true); // move가 visible이 되어야 나타나는 component내부에 있다
            move.current.focus(); // 반드시 먼저 보이고 focus해야함
            setFocus(false);
        } else {
            //setVisible(false);
            stay.current.focus();
            setFocus(true);
        }
    };*/

    const Move = () => {
        setVisible(true);
        move.current.focus();
    };

    const Stay = () => {
        setVisible(false);
        stay.current.focus();
    };
    
    
    return(
        <Grid container spacing={6}
            /*onFocus={()=>{ // 글쓰기 버튼 클릭 했을 때 옆으로 창이동 focus 
                setVisible(true); // button 클릭, input창 입력 등을 하면 focus가 된다.
            }}*/
            //onFocus={Focus}
        >
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