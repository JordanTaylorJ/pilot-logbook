import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { UserContext } from '../context/user';
import { Container } from '@mui/material';

const NavBar = () => { 

    const {user, setUser} = useContext(UserContext); 

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => setUser(''))
    }

    return(
        <AppBar position="sticky">
        <Container maxWidth="xl">
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
                component={Link} to='/aircraft'
            >
                Aircraft
            </Button>
            {!user ? 
                <>
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
                </>
            :
                <Button
                    color="inherit"
                    onClick={(e) => handleLogout(e)}
                >
                    Logout
                </Button>
            }
            </Toolbar>
            </Container>
        </AppBar>
    ); 
}

export default NavBar;