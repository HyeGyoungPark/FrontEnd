import React, {useState} from 'react';
import Sidebar from '../page/Sidebar';
import {Box} from '@mui/material';
import Header from './Header';
import ContentGrid from './ContentGrid';


function MainPageContent(props) {
    
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
                height: '85vh',
                border: '1px solid skyblue',
                padding: '4.5%',
                paddingBottom: '1%',
                marginTop: props.style
            }}
        >
            <Header setToggle={setToggle} openBar={handleDrawerOpen}/>
            <Sidebar toggle={toggle} closeBar={handleDrawerClose}/>
            <ContentGrid></ContentGrid>
        </Box>
    );
}

export default MainPageContent;