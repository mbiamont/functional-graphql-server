import {IAddBookController} from '../controller/iAddBookController'
import {IFetchBooksController} from '../controller/iFetchBooksController'
import {IFetchAuthorsController} from '../controller/iFetchAuthorsController'
import {IFetchAuthorBooksController} from '../controller/iFetchAuthorBooksController'
import {IResolvers} from 'graphql-tools/dist/Interfaces'
import {Book, Author, MutationAddBookArgs} from './@types'

export class GraphQlResolvers {

    constructor(
        private readonly fetchBooksController: IFetchBooksController,
        private readonly fetchAuthorsController: IFetchAuthorsController,
        private readonly addBookController: IAddBookController,
        private readonly fetchAuthorBooksController: IFetchAuthorBooksController) {
    }

    buildResolvers(): IResolvers {
        return {
            Query: {
                books: async (): Promise<Book[]> => await this.fetchBooksController.onFetchBooksCalled(),

                authors: async (): Promise<Author[]> => await this.fetchAuthorsController.onFetchAuthorsCalled()
            },

            Mutation: {
                addBook: async (parent: unknown, args: MutationAddBookArgs): Promise<Book> => await this.addBookController.onAddBookCalled(args.title, args.author)
            },

            Author: {
                books: async (parent: Author): Promise<Book[]> => await this.fetchAuthorBooksController.onFetchAuthorBooks(parent.name)
            }
        }
    }
}