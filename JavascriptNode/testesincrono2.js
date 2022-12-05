/// Back-End
const buscarDados = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var dados = require('./dados.json');
            resolve(dados)
        }, 3000);
    })
}

/// Front-End
const start = async () => {
    try {
        let dados = await buscarDados()
        console.log( dados.email )
    } catch (error) {
        console.log("Ops, algo deu errado!")
    }
}

start()