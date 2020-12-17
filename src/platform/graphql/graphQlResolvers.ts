import {IResolvers} from 'graphql-tools/dist/Interfaces'
import {Book, Author, MutationAddBookArgs} from './@types'
import {
    AddBookController,
    FetchAuthorBooksController,
    FetchAuthorsController,
    FetchBooksController
} from '../controller/@types'

export const createAppResolvers = (onFetchBooksCalled: FetchBooksController,
    onFetchAuthorsCalled: FetchAuthorsController,
    onAddBookCalled: AddBookController,
    onFetchAuthorBooksCalled: FetchAuthorBooksController): IResolvers => {
    return {
        Query: {
            books: async (): Promise<Book[]> => await onFetchBooksCalled(),

            authors: async (): Promise<Author[]> => await onFetchAuthorsCalled()
        },

        Mutation: {
            addBook: async (parent: unknown, args: MutationAddBookArgs): Promise<Book> => await onAddBookCalled(args.title, args.author)
        },

        Author: {
            books: async (parent: Author): Promise<Book[]> => await onFetchAuthorBooksCalled(parent.name)
        }
    }
}