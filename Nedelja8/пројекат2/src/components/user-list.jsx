import React from 'react';
import { User } from './user';

export const UserList = ({ users = [], search }) => {
  let regex = RegExp(search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  if(regex !== `[]`)
  users = users.filter(u => regex.test(u.name));
  console.log(users);
  return (
    <div className="user-list">
      {
        users.map(user => <User key={user.name} user={user} />)
      }
    </div>
  );
}