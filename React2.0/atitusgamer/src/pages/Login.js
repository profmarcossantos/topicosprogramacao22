import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  const navigate = useNavigate();

  const validar = () => {
    props.setLogin(true)
    navigate("/menu")

  }


  return (
    <Grid container style={{ padding: 10 }}>
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <h1>Sejam Bem-Vindos</h1>
          <h2>ATITUS GAMERS</h2>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
      <Grid item md={4} xs={12} sm={12} style={{ backgroundColor: "white", padding: 10, borderRadius: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="E-mail"
            fullWidth={true}
            variant="standard"
            type="email"
          />
        </div>
        <div>
          <TextField
            label="Password"
            fullWidth={true}
            variant="standard"
            type="password"
          />
        </div>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={validar}
          >Entrar</Button>
          <Button variant="outlined">Cancelar</Button>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
    </Grid>
  )
}

