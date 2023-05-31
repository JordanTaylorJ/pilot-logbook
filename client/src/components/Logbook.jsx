import React, {useState, useContext} from 'react';
import { UserContext } from '../context/user';

const Logbook = () => {

    const {user} = useContext(UserContext);

    const [logs, setLogs] = useState(user.logs);

    console.log('user', user)
    console.log('logs', logs)

    if (logs.length > 0)
    return(
        <>
        <h1>list here </h1>
        {logs.map(log => 
            <h1>{log.date}</h1>
        )}
        </>
    )
    else return(
        <h1>nothing</h1>
    )
}

export default Logbook;