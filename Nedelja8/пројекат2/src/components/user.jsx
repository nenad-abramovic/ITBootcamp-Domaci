import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const User = ({ user }) => {
  const classes = useStyles();

  let initials = user.name.split(' ').map(x => x[0]).join('');

  return (
    <Grid item>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              {initials}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary={user.number} />
        </ListItem>
      </List>
    </Grid>
  );
}