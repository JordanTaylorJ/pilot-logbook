import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewAircraft from './NewAircraft';

const Aircraft = ({aircraft}) => {

    if (aircraft.length > 0)
    return(
        <>
        <NewAircraft/>
        {aircraft.map(air => {
            return(
            <Card sx={{ minWidth: 275 }} key={air.id}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {air.aircraft_type}
                </Typography>
                <Typography variant="h5" component="div">
                {air.ident}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Notes:
                </Typography>
                <Typography variant="body2">
                something here maybe not sure..
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
            </Card>
            )
        })}
        
    </>
    )
}

export default Aircraft;