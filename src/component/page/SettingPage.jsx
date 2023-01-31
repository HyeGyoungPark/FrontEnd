import React, {useState} from 'react';
import Sidebar from './Sidebar';
import {Box, Typography, Divider} from '@mui/material';
import Header from '../ui/Header';
import { Container } from '@mui/system';

function SettingPage(props) {

    const [toggle, setToggle] = useState(false);

    const handleDrawerOpen = () => {
        setToggle(true);
    }
    
    const handleDrawerClose = () => {
        setToggle(false);
    }
    return (
        <Box>
            <Header setToggle={setToggle} openBar={handleDrawerOpen}/>
            <Sidebar toggle={toggle} closeBar={handleDrawerClose}/>
            <Container>
                <Box sx={{height: '10vw'}}/>
                <Box sx={{height: '200px'}}>
                    <Typography variant="h6">소개글 수정</Typography>
                    <Divider sx={{width: '40%', border: '1px solid #8c8c8c'}} />
                </Box>
                <Box sx={{height: '200px'}}>
                    <Typography variant="h6">프로필 사진 수정</Typography>
                    <Divider sx={{width: '40%', border: '1px solid #8c8c8c'}} />
                </Box>
                <Box sx={{height: '200px'}}>
                    <Typography variant="h6">블로그 이름 수정</Typography>
                    <Divider sx={{width: '40%', border: '1px solid #8c8c8c'}} />
                </Box>
                <Box sx={{height: '200px'}}>
                    <Typography variant="h6">프로필 음악 수정</Typography>
                    <Divider sx={{width: '40%', border: '1px solid #8c8c8c'}} />
                </Box>
                <Box sx={{height: '200px'}}>
                    <Typography variant="h6">이웃 관리</Typography>
                    <Divider sx={{width: '40%', border: '1px solid #8c8c8c'}} />
                </Box>
            </Container>
        </Box>
    );
}

export default SettingPage;