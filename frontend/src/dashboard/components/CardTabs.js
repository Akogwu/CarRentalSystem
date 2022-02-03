import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {Box, Button, Card, CardContent, CardMedia, IconButton, Toolbar, Typography} from "@mui/material";
import benz from "./benz.png"
 import {Tag,Badge} from "antd";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 300,
  lineHeight: '60px',
  padding:'1rem'
}));

export const CardTabs = () => {
  
  
  
    return (
    <Fragment>
         <Grid container spacing={2} style={{ display:"flex", justifyContent:"center", alignItems:"center",height:"100vh" }}>
            <Grid item xs={6}>


                <Item  elevation={1}>
                        <h1 style={{ fontWeight:700, padding:"1rem 0" }}>Car Fleet</h1>
                <Card sx={{ display: 'flex',padding:"1rem" }}>
                    <CardMedia
                        component="img"
                        image={benz}
                        sx={{ width: 151, objectFit:"contain" }}
                        alt="Live from space album cover"
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Tag>Number of Cars</Tag>
                            <Badge count={8} className="site-badge-count" />
                            
                            <Button>View all cars</Button>
                        </CardContent>
                    </Box>

                </Card>
                </Item>
            
            </Grid>
            <Grid item xs={6}>

                
                <Item  elevation={1}>
                <h1 style={{ fontWeight:700, padding:"1rem 0" }}>Customers</h1>
                </Item>
            
            </Grid>
         </Grid>
    </Fragment>
    );
};
