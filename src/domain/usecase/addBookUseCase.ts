import {IAddBookUseCase} from './iAddBookUseCase'
import {Book} from '../entity/book'
import {StoreBook} from '../service/@types'

export class AddBookUseCase implements IAddBookUseCase {

    constructor(private readonly storeBook: StoreBook) {
    }

    async addBook(book: Book, output: (book: Book) => void): Promise<void> {
        await this.storeBook(book)
        output(book)
    }
}