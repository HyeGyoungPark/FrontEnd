import React, {useState} from 'react';
import Sidebar from './Sidebar';
import {Box} from '@mui/material';
import Header from '../ui/Header';

function MainPage(props) {
    
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
        </Box>
    );
}

export default MainPage;