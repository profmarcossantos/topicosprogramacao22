function changeScreen(tela) {

    let screen = ""
    if (tela == "Capa") {
        screen = `
        <div><h1>Você está na Capa do Site</h1>
        <li>
            <ul>Parceiro 1</ul>
            <ul>Parceiro 2</ul>
            <ul>Parceiro 3</ul>
        </li>
        <input placeholder="news"/>
        </div>`

    } else if (tela == "Produtos") {
        screen = '<div><h1>Você está na Lista de Produtos</h1></div>'
    } else {
        screen = "Página não encontrada!"
    }

    document.getElementById("conteudo").innerHTML = screen

}

changeScreen("Capa")