import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import 'graphql-import-node'
import * as typeDefs from './schema.graphql'
import cors from 'cors'
import {makeExecutableSchema} from 'graphql-tools'
import {IResolvers} from 'graphql-tools'
import {createServer} from 'http'
import compression from 'compression'

type Author = {
    name: string
}

type Book = {
    title: string
    author: Author
}

const books: Book[] = []

const resolvers: IResolvers = {
    Query: {
        books(parent, args, context, info) {
            return books
        },

        authors(parent, args, context, info) {
            const authors = new Map<string, Author>()
            books.forEach(b => authors.set(b.author.name, b.author))
            return authors.values()
        }
    },

    Mutation: {
        addBook(parent, args, context, info) {
            const book: Book = {
                title: args.title,
                author: {
                    name: args.author
                }
            }
            books.push(book)
            return book
        }
    },

    Author: {
        books(parent, args, context, info) {
            return books.filter(b => b.author.name == parent.name)
        }
    }
}

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