import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 300,
  lineHeight: '60px',
}));

export const CardTabs = () => {
  
  
  
    return (
    <Fragment>
         <Grid container spacing={2} style={{ display:"flex", justifyContent:"center", alignItems:"center",height:"100vh" }}>
            <Grid item xs={6}>


                <Item  elevation={1}>
                        <h1 style={{ fontWeight:700, padding:"1rem 0" }}>Car Fleet</h1>
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
