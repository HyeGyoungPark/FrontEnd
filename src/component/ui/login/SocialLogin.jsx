import React, { useState } from "react";
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
import './SocialLogin.css';
import google from '../../page/main/image/google.jpg';
import naver from'../../page/main/image/naver.jpg';

function SocialLogin(){
    return(
        <div className="login">
            <div className="googleLogin">
                <a
                    className="googleLink"
                    type="button"
                    variant="outlined"
                    href="/oauth2/authorization/google"
                    style={{
                        margin: 12
                    }}
                >
                    <img 
                        className="googleImg" 
                        src= {google}
                        alt="google"
                        width="50"
                        height="50"
                        style={{
                            borderRadius: "10px",
                            border: "0.5px solid rgb(208,211,215)"
                        }}
                    />
                </a>
            </div>
            <div className="naverLogin">
                <a
                    className="naverLink"
                    type="button"
                    variant="outlined"               
                    href="/oauth2/authorization/naver"
                    style={{
                        margin: 12
                    }}
                >
                    <img 
                        className="naverImg" 
                        src= {naver}
                        alt="naver"
                        width="50"
                        height="50"
                        style={{
                            borderRadius: "10px"
                        }}
                    />
                </a>
            </div>
        </div>
    );
}

export default SocialLogin;