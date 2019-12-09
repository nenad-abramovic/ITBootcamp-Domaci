import React from 'react';

export const User = ({ user }) => {
  return (
    <div className="user">
      <label>{user.name}</label>
      <label>{user.number}</label>
    </div>
  );
}