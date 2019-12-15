import React from 'react';
import { Typography, Grid, AppBar, Box, Toolbar } from '@material-ui/core';

export const Header = () => {
  return (
    <Grid item>
        <AppBar>
          <Toolbar>
            <Box mx="auto" p={1}>
              <Typography variant="h5">
                Телефонски именик
            </Typography>
              <Typography variant="subtitle2" component="p" style={{textAlign:"center"}}>
                Сви бројеви на једном месту
            </Typography>
            </Box>
          </Toolbar>
        </AppBar>
    </Grid>
  );
}