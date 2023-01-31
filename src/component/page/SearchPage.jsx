import React, {useState} from 'react';
import Header from '../ui/Header';
import Sidebar from './Sidebar';
import {Box, Button, Typography} from '@mui/material';
import { Container } from '@mui/system';

function SearchPage(props) {
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
                <Typography sx={{margin: '10px 0'}}>search page</Typography>
                <Button variant="outlined" href='..'>main</Button>
            </Container>
        </Box>
    );
}

export default SearchPage;