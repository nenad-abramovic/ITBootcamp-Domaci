import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: `8px`,
      marginLeft: '0px',
      marginRight: '0px'
    }
  }
}));

export const InputForm = ({ updateUsers }) => {
  const [user, setUser] = useState({
    name: '',
    number: ''
  });

  const classes = useStyles();

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
    <Grid item
      container
      direction="column"
      spacing={2}
      justify="center"
      alignItems="center"
    >
      <form onSubmit={e => e.preventDefault()} className={classes.root} >

        <Grid item>
          <TextField
            variant="outlined"
            id="name"
            label="Име и презиме"
            value={user.name}
            onChange={e => setUser({
              name: e.target.value,
              number: user.number
            })}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            id="number"
            label="Број телефона"
            value={user.number}
            onChange={e => setUser({
              name: user.name,
              number: e.target.value
            })}
            required
          />
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={submit}
            color="primary"
          >
            Унеси корисника
        </Button>
          <p style={{width:'240px'}}>{errorMessage}</p>
        </Grid>
      </form>

    </Grid>
  );
}