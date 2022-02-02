import React from 'react';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {Box, Card, CardContent, CardMedia, IconButton, Toolbar, Typography} from "@mui/material";
import {GrFormClose} from "react-icons/gr";


const SearchDrawer = ({NavbarRef, closeDrawer, openDrawer, open}) => {
    const   drawerBleeding = 20;
    return (
        <SwipeableDrawer
            container={NavbarRef}
            anchor="right"
            open={open}
            onClose={closeDrawer}
            onOpen={openDrawer}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <Toolbar variant="dense" sx={{backgroundColor:"#f1f1f1", padding:"1rem"}}>
                <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} onClick={closeDrawer}>
                    <GrFormClose />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Search results
                </Typography>
            </Toolbar>
            <Box sx={
                {padding:"2rem"}
            }>


                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous">

                            </IconButton>
                            <IconButton aria-label="play/pause">

                            </IconButton>
                            <IconButton aria-label="next">

                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Live from space album cover"
                    />
                </Card>
            </Box>



        </SwipeableDrawer>
    );
};

export default SearchDrawer;