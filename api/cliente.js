const listarClientes = () => {
  return fetch("http://localhost:4000/clientes", {
    method: "get",
  })
    .then((resposta) => {
      return resposta.json();
    })
    .then((json) => {
      return json;
    });
};

const enviarClientes = (nome, cpf) => {
  let json = JSON.stringify({
    nome:nome,
    cpf:cpf
  })

  return fetch("http://localhost:4000/clientes/cliente", {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: json,
  }).then((resposta) => {
    return resposta.body
  })
}
