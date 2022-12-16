import { Grid, IconButton } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { pegarGamers, deleteGamer } from '../services/BancoService'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Menu(props) {

  const [gamers, setGamers] = useState([])

  const buscarGamers = () => {
    pegarGamers()
      .then((dados) => setGamers(dados))
      .catch((e) => alert(e))
  }

  useLayoutEffect(() => {

    buscarGamers()
  }, [])

  const deletarGamer = async (id) => {

    try {
      await deleteGamer(id)
      alert("Dados Excluídos")
      buscarGamers()

    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Nome</TableCell>
                    <TableCell align="right">E-mail</TableCell>
                    <TableCell align="right">Telefone</TableCell>
                    <TableCell align="right">Rede Social</TableCell>
                    <TableCell align="right">Opções</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gamers.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.nome}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.telefone}</TableCell>
                      <TableCell align="right">{row.rede}</TableCell>
                      <TableCell align="right">
                        <IconButton color="primary" onClick={() => deletarGamer(row.id)}>
                          <DeleteIcon />
                        </IconButton>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
