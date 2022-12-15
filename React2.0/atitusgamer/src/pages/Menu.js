import { Grid } from '@mui/material'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

export default function Menu() {
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
            <div className='itemMenu'>Logoff</div>
          </div>
          <div className='corpo'>
            <br />
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
