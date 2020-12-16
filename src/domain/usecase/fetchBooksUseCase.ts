import {Book} from '../entity/book'
import {GetAllBooks} from '../service/@types'
import { FetchBooksUseCase} from './@types'

export const createFetchBooksUseCase = (
    getAllBooks: GetAllBooks
): FetchBooksUseCase => async (output: (books: Book[]) => void): Promise<void> => {
    const books = await getAllBooks()
    output(books)
}