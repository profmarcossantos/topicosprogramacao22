import React from 'react'
import { Link } from 'react-router-dom'

export default function Erros() {
  return (
    <>
      <div>Ops, página não encontrada!</div>
      <Link to={'/'} > Voltar para o Login </Link>
    </>
  )
}
