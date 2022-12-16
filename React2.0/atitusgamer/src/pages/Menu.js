import { Grid } from '@mui/material'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'

export default function Menu(props) {
  const navigate = useNavigate();

  const logoff = () => {
    sessionStorage.removeItem("login")
    navigate("/")
  }

  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>

          <div className='menu'>
            <div className='itemMenu'>Capa</div>
            <div className='itemMenu'>Cadastro</div>
            <div className='itemMenu' onClick={logoff}>Logoff</div>
          </div>
          <div className='corpo'>
            Corpo
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
