import React, {useState, useContext} from 'react';
import { UserContext } from '../context/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Logbook = () => {

    const {user} = useContext(UserContext);
    const [logs, setLogs] = useState([
        {id: 3, date: '05/26/2023', from_to: null, remarks_and_endorsements: null, dual_received: 0.9, total_duration: 0.9, aircraft: {id: 3, ident: 'N4741N', aircraft_type: 'C172'}},
        {id: 4, date: '05/29/2023', from_to: null, remarks_and_endorsements: null, dual_received: 1.4, total_duration: 1.4, aircraft: {id: 3, ident: 'N4741N', aircraft_type: 'C172'}}
    ]);

    console.log('user', user, 'logs', logs)

    if (logs.length > 0)
    return(
        <>
        {logs.length > 0 && (
        <form >
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="right">Aircraft Type</TableCell>
                    <TableCell align="right">Aircraft ID</TableCell>
                    <TableCell align="right">from/to</TableCell>
                    <TableCell align="right">Remarks & Endorsements</TableCell>
                    <TableCell align="right">Takeoffs</TableCell>
                    <TableCell align="left">Landings</TableCell>
                    <TableCell align="left">Single-Engine Land</TableCell>
                    <TableCell align="left">Multi-Engine Land</TableCell>
                    <TableCell align="left">Night</TableCell>
                    <TableCell align="left">Actual Instrument</TableCell>
                    <TableCell align="left">Simulated Instrument</TableCell>
                    <TableCell align="left">Cross Country</TableCell>
                    <TableCell align="left">Flight Instructor</TableCell>
                    <TableCell align="left">Dual Received</TableCell>
                    <TableCell align="left">Pilot In Command</TableCell>
                    <TableCell align="left">Total Duration</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {logs.map((log) => (
                <TableRow
                    key={log.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left">{log.date}</TableCell>
                    <TableCell align="left">{log.aircraft.aircraft_type}</TableCell>
                    <TableCell align="left">{log.aircraft.ident}</TableCell>
                    <TableCell align="left">{log.from_to}</TableCell>
                    <TableCell align="left">{log.remarks_and_endorsements}</TableCell>
                    <TableCell align="left">{log.takeoffs}</TableCell>
                    <TableCell align="left">{log.landings}</TableCell>
                    <TableCell align="left">{log.single_engine_land}</TableCell>
                    <TableCell align="left">{log.multi_engine_land}</TableCell>
                    <TableCell align="left">{log.night}</TableCell>
                    <TableCell align="left">{log.actual_instrument}</TableCell>
                    <TableCell align="left">{log.simulated_instrument}</TableCell>
                    <TableCell align="left">{log.cross_country}</TableCell>
                    <TableCell align="left">{log.flight_instructor}</TableCell>
                    <TableCell align="left">{log.dual_received}</TableCell>
                    <TableCell align="left">{log.pilot_in_command}</TableCell>
                    <TableCell align="left">{log.total_duration}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer> 
        </form>
        )}
</>

    )
    else return(
        <h1>nothing</h1>
    )
}

export default Logbook;