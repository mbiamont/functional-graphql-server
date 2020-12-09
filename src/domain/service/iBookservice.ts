import {Book} from '../entity/book'

export interface IBookService {

    getAllBooks(): Promise<Book[]>

    storeBook(book: Book): Promise<void>
}