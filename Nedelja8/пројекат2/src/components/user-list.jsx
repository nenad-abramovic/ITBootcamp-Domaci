import React from 'react';
import { User } from './user';
import { Grid } from '@material-ui/core';

export const UserList = ({ users = [], search }) => {
  let regex = RegExp(search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  if (regex !== `[]`)
    users = users.filter(u => regex.test(u.name));
  console.log(users);
  return (
    <Grid
      item xs={12}
      style={{
        maxHeight:'240px',
        overflowY: 'auto'
      }}
    >
      <div className="user-list">
        {
          users.map(user => <User key={user.name} user={user} />)
        }
      </div>
    </Grid>
  );
}