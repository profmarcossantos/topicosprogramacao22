import React, { useState, useLayoutEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import axios from 'axios'

export default function Menu() {

  const [clientes, setClientes] = useState([])

  useLayoutEffect(() => {

    axios.get("https://randomuser.me/api/?results=20")
      .then((retorno) => setClientes(retorno.data.results))
      .catch((error) => console.log(error))


  }, [])

  return (
    <>
      <Cabecalho iconLogin={false} />
      <div>

        <h1>Lista dos Clientes</h1>
        {
          clientes.map((item, key) =>
            <div key={key} >{item.name.title} {item.name.first} - {item.email} </div>

          )
        }

      </div>
      <Rodape />
    </>
  )
}
