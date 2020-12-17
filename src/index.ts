import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import 'graphql-import-node'
import * as typeDefs from '../schema/schema.graphql'
import cors from 'cors'
import {makeExecutableSchema} from 'graphql-tools'
import {IResolvers} from 'graphql-tools'
import {createServer} from 'http'
import compression from 'compression'
import {appContainer} from './factories/appContainer'

const resolvers: IResolvers = appContainer.generateResolvers()

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const app = express()

app.use('*', cors())
app.use(compression())

const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    playground: true,
})

server.applyMiddleware({app, path: '/graphql'})

createServer(app).listen({port: 3000}, (): void =>
    console.log('\n🚀      GraphQL is now running on http://localhost:3000/graphql')
)