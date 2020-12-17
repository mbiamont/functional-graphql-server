import {IResolvers} from 'graphql-tools/dist/Interfaces'
import {Book, Author, MutationAddBookArgs} from './@types'
import {
    AddBookController,
    FetchAuthorBooksController,
    FetchAuthorsController,
    FetchBooksController
} from '../controller/@types'

export class GraphQlResolvers {

    constructor(
        private readonly onFetchBooksCalled: FetchBooksController,
        private readonly onFetchAuthorsCalled: FetchAuthorsController,
        private readonly onAddBookCalled: AddBookController,
        private readonly onFetchAuthorBooksCalled: FetchAuthorBooksController) {
    }

    buildResolvers(): IResolvers {
        return {
            Query: {
                books: async (): Promise<Book[]> => await this.onFetchBooksCalled(),

                authors: async (): Promise<Author[]> => await this.onFetchAuthorsCalled()
            },

            Mutation: {
                addBook: async (parent: unknown, args: MutationAddBookArgs): Promise<Book> => await this.onAddBookCalled(args.title, args.author)
            },

            Author: {
                books: async (parent: Author): Promise<Book[]> => await this.onFetchAuthorBooksCalled(parent.name)
            }
        }
    }
}