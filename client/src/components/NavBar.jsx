import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const NavBar = () => { 

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                component={Link} to='/'
            >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Logbook
            </Typography>
            </IconButton>
            <Button 
                color="inherit"
                component={Link} to='/login'
            >
                Login
            </Button>
            <Button 
                color="inherit"
                component={Link} to='/signup'
            >
                Signup
            </Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default NavBar;