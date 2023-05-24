import React, {useContext} from 'react';
import { UserContext } from '../context/user';

const Home = () => {

    const {user} = useContext(UserContext);

    if (!user){
        return(
            <h1>ET phone home </h1>
        )
    }
    else {
        return( 
            <h1>{user.username} is here</h1>
        )
    }
}

export default Home; 