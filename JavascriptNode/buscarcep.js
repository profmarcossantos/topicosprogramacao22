const axios = require('axios');

const buscarDados = async(cep) =>{

    let dados = await axios.get("https://viacep.com.br/ws/"+cep+"/json/")
    return dados

}


/// front-end

const main = async() => {
    let retorno = await buscarDados("99500000")
    console.log(retorno.data);
}

main()

