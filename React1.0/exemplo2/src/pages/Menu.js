import React, { useState, useLayoutEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Menu() {

  const [clientes, setClientes] = useState([])

  useLayoutEffect(() => {

    axios.get("https://randomuser.me/api/?results=20&nat=BR")
      .then((retorno) => {
        setClientes(retorno.data.results)
      })
      .catch((error) => console.log(error))


  }, [])

  return (
    <>
      <Cabecalho iconLogin={false} />
      <div>
        <h1>Lista dos Clientes</h1>
        <table>
          {
            clientes.map((item, key) =>
              <tr key={key}>
                <td style={{ width: "10%" }} >
                  <img alt={"imagem do cliente"} src={item.picture.large} style={{ maxWidth: 80, borderRadius: 50 }} />
                </td>
                <td style={{ width: "10%", textAlign: "right" }} >{item.name.title} </td>
                <td style={{ width: "20%" }}>{item.name.first} {item.name.last} </td>
                <td style={{ width: "20%" }}>e-mail: {item.email} </td>
                <td style={{ width: "20%" }}>
                  <Link to={"/details"} state={item}>
                    Visualizar </Link>
                </td>
              </tr>
            )
          }
        </table>

      </div>
      <Rodape />
    </>
  )
}
