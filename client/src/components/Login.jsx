import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('button was pressed')
    }


    console.log(username, password);
    return(
        <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
            '& > :not(style)': { m: 1, width: '25ch', mt:15 },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField 
            id="standard-basic" 
            label="Username" 
            variant="standard" 
            type='text'
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
        />
        <TextField 
            id="standard-basic" 
            label="Password" 
            variant="standard" 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button
            type='submit' 
            value="submit"
        >
            Sign In
        </Button>
        </Box>
    )
}

export default Login;