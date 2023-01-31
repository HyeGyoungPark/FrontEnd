import React, {useState} from 'react';
import Sidebar from './Sidebar';
import {Box} from '@mui/material';
import Header from '../ui/Header';
import ContentGrid from '../ui/ContentGrid';

function MainPage(props) {
    
    const [toggle, setToggle] = useState(false);

    const handleDrawerOpen = () => {
        setToggle(true);
    }
    
    const handleDrawerClose = () => {
        setToggle(false);
    }
    
    return (
        <Box
            sx={{
                width: '172%',
                height: '86vh',
                border: '1px solid skyblue',
                padding: '4.5%',
                paddingBottom: '1%' 
            }}
        >
            <Header setToggle={setToggle} openBar={handleDrawerOpen}/>
            <Sidebar toggle={toggle} closeBar={handleDrawerClose}/>
            <ContentGrid></ContentGrid>
        </Box>
    );
}

export default MainPage;