'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 300

// definiendo el esquema
const schema = buildSchema( 
    readFileSync( 
        join(
            __dirname, 'lib', 'schema.graphql'),
            'utf-8'
    )
)

// Definir el midleware en un endpoint donde se define el schema y los resolvers ademas del entorno de GraphQL
app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
