const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const resolvers = require("../src/resolvers");

const schemaPath = "./src/schema/index.graphql";

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen({port: 4000}).then(({url}) => {
    console.log(`Executando em ${url}`);
})

