import {Book} from '../../domain/entity/book'
import {GetAllBooks, StoreBook} from '../../domain/service/@types'

export const createGetAllBooks = (books: Book[]): GetAllBooks => async (): Promise<Book[]> => books

export const createStoreBook = (books: Book[]): StoreBook => async (book: Book): Promise<void> => {
    books.push(book)
}