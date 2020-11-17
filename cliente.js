const informacoesClientes = [
    {
    cpf: 18875539081,
    nome: "Jairo"
    }, {
    cpf: 54754565002,
    nome: "Bill Gates"    
    }
]

const corpoTabela = document.querySelector("[data-conteudo-tabela]")

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr')

    const conteudolinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
        `
    
    linha.innerHTML = conteudolinha

    return linha
}

informacoesClientes.forEach( indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
});