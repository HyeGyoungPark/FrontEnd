import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';

function Header({setToggle, openBar}) {
    return (
        <AppBar style={{background: '#87CEEB'}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        setToggle((prevState) => !prevState);
                        openBar();
                    }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Bstar
                </Typography>
            </Toolbar>
        </AppBar>        
    );
}

export default Header;