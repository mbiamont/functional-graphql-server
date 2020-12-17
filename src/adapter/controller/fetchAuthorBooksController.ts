import {Book} from '../../domain/entity/book'
import {FetchAuthorBooksUseCase} from '../../domain/usecase/@types'
import {FetchAuthorBooksController} from '../../platform/controller/@types'

export const createFetchAuthorBooksController = (
    performFetchAuthorBooks: FetchAuthorBooksUseCase
): FetchAuthorBooksController => async (authorName: string): Promise<Book[]> => {
    return new Promise((resolve) => performFetchAuthorBooks(authorName, (books: Book[]) => resolve(books)))
}