import React, { Fragment,useState } from 'react';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import { putApi } from '../../api/clientApi';
import {Alert} from "react-bootstrap";
const ReservationDetail = ({closeDrawer, openDrawer, open,reservation}) => {


    const confirm = () =>{
        putApi(`/reservations/${reservation.id}/confirm`)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }

    const cancel = () =>{
        putApi(`/reservations/${reservation.id}/cancel`)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }

    const returned = () =>{
        putApi(`/reservations/${reservation.id}/carReturned`)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }

    const picked = () =>{
        putApi(`/reservations/${reservation.id}/carPicked`)
        .then(response => console.log(response))
        .catch(error => console.log(error.message));
    }

    console.log(reservation);

const drawerBleeding = 50;
  return (
  <Fragment>
      <SwipeableDrawer
            container={null}
            anchor="left"
            open={open}
            onClose={closeDrawer}
            onOpen={openDrawer}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <Box sx={
                {padding:"2rem"}}>

                <Card sx={{ display: 'flex' }}>
                {  (reservation.status === "CANCELLED") && <Alert variant="danger">This reservation was cancelled </Alert> }
                

                    <h2>{reservation.pickupDate} - {reservation.returnDate}</h2>
                    
                    {  (reservation.status === "STARTED") && <CardActions>
                        <Button size="small" onClick={ confirm }>Confirm Request</Button>
                        <Button size="small" onClick={ cancel }>Cancel Request</Button>
                    </CardActions>}

                    {  (reservation.status === "CONFIRMED") && <CardActions>
                        <Button size="small" onClick={ picked }>Car Picked up</Button>
                    </CardActions>}

                    {  (reservation.status === "INPROGRESS") && <CardActions>
                        <Button size="small" onClick={ returned }>Car returned</Button>
                    </CardActions>}


                </Card>
            </Box>
        </SwipeableDrawer>
  </Fragment>
  );
};

export default ReservationDetail;
