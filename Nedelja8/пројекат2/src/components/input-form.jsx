import React, { useState } from 'react';

export const InputForm = ({ updateUsers }) => {
  const [user, setUser] = useState({
    name: '',
    number: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    if (!/^(?!\s*$).+/.test(user.name)) {
      return setErrorMessage('Име и презиме не може бити празно.');
    }
    if (!/^[+](\d){3}(\s)(\d){9}$/.test(user.number)) {
      return setErrorMessage('Телефон мора бити унет у формату +ххх ххххххххх.');
    }
    updateUsers(user);
    setErrorMessage('');
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()} >
        <input
          type="text"
          name="name"
          placeholder="Име и презиме"
          value={user.name}
          onChange={e => setUser({
            name: e.target.value,
            number: user.number
          })}
          required
        />

        <input
          type="text"
          name="number"
          placeholder="Број телефона"
          maxLength="14"
          value={user.number}
          onChange={e => setUser({
            name: user.name,
            number: e.target.value
          })}
          required
        />

        <input
          type="submit"
          value="Унеси корисника"
          onClick={submit}
        />
      </form>
      <p>{errorMessage}</p>
    </>
  );
}