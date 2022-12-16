import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'
import MenuOpcoes from '../components/MenuOpcoes'
import { salvarGamers } from '../services/BancoService'

export default function Cadastro(props) {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [rede, setRede] = useState("")

    const limpar = () => {
        setNome("")
        setEmail("")
        setTelefone("")
        setRede("")
    }

    const salvar = async () => {


        const dados = {
            nome: nome,
            email: email,
            telefone: telefone,
            rede: rede
        }

        try {
            await salvarGamers(dados)
            alert("Dados Salvos com Sucesso")
            navigate('/menu')

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
                        <Grid container style={{ padding: 10 }} spacing={1}>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Nome"
                                    variant="outlined"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Telefone"
                                    variant="outlined"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}

                                />
                            </Grid>
                            <Grid item md={6} xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Link Rede Social"
                                    variant="outlined"
                                    value={rede}
                                    onChange={(e) => setRede(e.target.value)}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    style={{ marginRight: 10 }}
                                    onClick={salvar}
                                >Cadastrar</Button>
                                <Button variant="outlined" onClick={limpar}>Limpar Dados</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>

    )
}
