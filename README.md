# API NodeJs com Apollo-Server, GraphQl e Sequelize

## Para iniciar iniciar o projeto, acesse a pasta ˜\api-graphql\ pelo terminal e execute:

- Instalar os pacotes:

```
yarn
```

- Iniciar o projeto

```
yarn start
```

Após a execução do comando `yarn start`, acesse o endereço pelo navegado http://localhost:4000/

A porta `4000` do projeto pode ser alterada no arquivo `\server\index.js` no fragmento abaixo.

```
server.listen({port: 4000}).then(({url}) => {
    console.log(`Executando em ${url}`);
})
```
