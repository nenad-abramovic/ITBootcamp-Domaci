import React, { useState } from 'react';

export const InputForm = ({ updateUsers }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submit = () => {
    if (!/^(?!\s*$).+/.test(name)) {
      return setErrorMessage('Име и презиме не може бити празно.');
    }
    if (!/^[+](\d){3}(\s)(\d){9}$/.test(number)) {
      return setErrorMessage('Телефон мора бити унет у формату +ххх ххххххххх.');
    }
    updateUsers({
      name: name,
      number: number
    });
    setErrorMessage('');
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()} >
        <input
          type="text"
          name="name"
          placeholder="Име и презиме"
          onInput={e => setName(e.target.value)}
          required
        />

        <input
          type="text"
          name="number"
          placeholder="Број телефона"
          maxLength="14"
          onInput={e => setNumber(e.target.value)}
          required
        />

        <input
          type="submit"
          value="Унеси број"
          onClick={submit}
        />
      </form>
      <p>{errorMessage}</p>
    </>
  );
}