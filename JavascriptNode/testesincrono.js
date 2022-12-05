function mostraInter() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Internacional")
        }, 5000);
    })
}

const mostraGremio = () => {
    return "Grêmio"
}

// Aqui será a view da nossa aplicação

async function main() {
    try {
        console.log( await mostraInter() )    
    } catch (error) {
        console.log("Ops, algo deu errado!")
    }
    
    console.log( mostraGremio() )
        
}

main()


