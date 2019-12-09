import React from 'react';
import { User } from './user';

export const UserList = ({ users=[] }) => {
  return (
    <div className="user-list">
      {
        users.map(user => <User key={user.name} user={user} />)
      }
    </div>
  );
}