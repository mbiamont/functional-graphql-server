import {Book} from '../entity/book'

export type GetAllBooks = () => Promise<Book[]>

export type StoreBook = (book: Book) => Promise<void>