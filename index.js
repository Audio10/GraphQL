'use strict'

const { graphql, buildSchema } = require('graphql') 
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 300

// definiendo el esquema
const schema = buildSchema(`
    type Query{
        "Retorna un saludo al mundo"
        hello: String
    }
`)

// Configurar los resolvers
const resolvers = {
    hello: ()=> {
        return 'Hola Mundo'
    }
}

// Definir el midleware en un endpoint donde se define el schema y los resolvers ademas del entorno de GraphQL
app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`)
})
