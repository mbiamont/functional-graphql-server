import {Book} from '../entity/book'

export interface IAddBookUseCase {

    addBook(book: Book, output: (book: Book) => void): Promise<void>
}