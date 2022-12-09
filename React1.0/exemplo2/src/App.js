import './assets/css/estilo.css' // <link ref="stylesheet" href="..." />
import loginImage from './assets/images/login.png'

const App = () => {

  let mensagemLogin = "Informe os dados do usuários para acessar a Plataforma:"

  const getNamePlataform = () => {
    return "Briquilaus Corporation"
  }

  return (
    <>
      <div>
        <img src={loginImage} style={
          {
            width: 50,
            height: 50,
            float: "left",
            marginRight: 10

          }}
          alt="Imagem de Login"
          />
      </div>
      <div>
        <h1 style={{
          textDecoration: "underline",
        }}>
          Login {getNamePlataform()}
        </h1>

        <span className='informativo'>
          {mensagemLogin}
        </span> <br />

        <input placeholder="Username:" type="text" /> <br />
        <input placeholder="Passoword:" type="password" /> <br />
        <button>ENTRAR</button>
      </div>
    </>
  )
}


export default App