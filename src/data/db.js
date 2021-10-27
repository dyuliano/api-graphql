let id = 1;
function proximoId() {
    return id++;
}

const perfilList = [
    { id: 1, nome: "administrador" },
    { id: 2, nome: "comprador" },
    { id: 3, nome: "comum" },
]

const usuariosList = [
    {
        id: proximoId(),
        nome: "Usuario 1",
        email: "usuario1@email.com",
        idade: 30,
        perfil_id: 1,
        status: "ATIVO",
    },
    {
        id: proximoId(),
        nome: "Usuario 2",
        email: "usuario2@email.com",
        idade: 30,
        perfil_id: 2,
        status: "INATIVO",
    },
    {
        id: proximoId(),
        nome: "Usuario 3",
        email: "usuario3@email.com",
        idade: 30,
        perfil_id: 3,
        status: "BLOQUEADO",
    },
]

const produtoList = [
    {
        id: proximoId(),
        nome: "Produto 1",
        imagem: "produto1.jpg",
        unidadeMedida: "UN",
        peso: 10.00,
        preco: 10.0,
        quantidadeEstoque: 1000.01,
        status: "ATIVO"
    },
    {
        id: proximoId(),
        nome: "Produto 2",
        imagem: "produto2.jpg",
        unidadeMedida: "PC",
        peso: 20.00,
        preco: 20.0,
        quantidadeEstoque: 300.00,
        status: "OBSOLETO"
    },
]

const clienetList = [
    {
        id: proximoId(),
        nomeCompleto: "Clinete Teste 1",
        email: "cliente1@email.com",
        cpf: "123.123.123-10",
        dataNascimento: "01-01-2020",
        endereco: { 
            endereco: "Endereco do Cliente 1",
            rua: "Rua de Cliente 1",
            bairro: "Bairro do Cliente 1"
        },
        status: "ATIVO",
    },
    {
        id: proximoId(),
        nomeCompleto: "Clinete Teste 2",
        email: "cliente2@email.com",
        cpf: "123.123.123-20",
        dataNascimento: "01-01-2020",
        endereco: { 
            endereco: "Endereco do Cliente 1",
            rua: "Rua de Cliente 2",
            bairro: "Bairro do Cliente 2"
        },
        status: "BLOQUEADO",
    },
]

const pedidoList = [
    {
        id: proximoId(),
        descricao: "Pedido 1",
        usuario_id: 1,
        status: "ANDAMENTO",
        dataCriacao: "01-01-2020",
    },
    {
        id: proximoId(),
        descricao: "Pedido 2",
        usuario_id: 2,
        status: "ENCERRADO",
        dataCriacao: "01-01-2020",
    },
]

module.exports = { 
    perfilList, 
    usuariosList, 
    produtoList,
    clienetList,
    pedidoList,
    proximoId 
}