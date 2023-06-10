import React, {useContext} from 'react';
import { UserContext } from '../context/user';
import Login from './Login';

const Home = () => {

    const {user} = useContext(UserContext);

    if (!user){
        return(
            <>
            <h1>Welcome</h1>
            </>
        )
    }
    else {
        return( 
            <>
            <h1>{user.username} is here</h1>
            </>
        )
    }
}

export default Home; 