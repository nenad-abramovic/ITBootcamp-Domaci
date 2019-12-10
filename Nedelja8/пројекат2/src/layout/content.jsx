import React, { useState } from 'react';
import { InputForm } from '../components/input-form';
import { UserList } from '../components/user-list';

// const data = [
//   {
//     name: 'Петар Петровић',
//     number: '+381 641234567'
//   },
//   {
//     name: 'Марко Марковић',
//     number: '+381 617654321'
//   },
//   {
//     name: 'Јован Јовановић',
//     number: '+381 621122123'
//   },
//   {
//     name: 'Петар Јовановић',
//     number: '+381 641234567'
//   },
//   {
//     name: 'Марко Јовановић',
//     number: '+381 617654321'
//   },
//   {
//     name: 'Јован Петровић',
//     number: '+381 621122123'
//   },
// ]

export const Content = () => {
  const [users, setUsers] = useState([]);
  const [tmpUsers, setTmpUsers] = useState(users);
  
  const updateUsers = (user) => {
    let currentUser = users.find(u => u.name === user.name);
    if(currentUser !== undefined) {
      if(window.confirm('Да ли желимо да заменимо број телефона новим бројем?')) {
        let tmp = [...users];
        tmp[tmp.indexOf(currentUser)] = user;
        setUsers(tmp);
        setTmpUsers(tmp);
      }
    } else {
      let tmp = [...users];
        tmp.push(user);
        setUsers(tmp);
        setTmpUsers(tmp);
    }
  }

  const search = (e) => {
    let regex = RegExp(e.target.value.trim(), 'i');
    let tmp = [...users];
    tmp = tmp.filter(u => regex.test(u.name));
    setTmpUsers(tmp);
  }

  return (
    <main>
      <InputForm updateUsers={updateUsers} />
      <UserList users={tmpUsers} />
      <input type="search" placeholder="Тражи корисника..." onInput={search} />
    </main>
  );
}