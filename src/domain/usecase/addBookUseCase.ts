import {IAddBookUseCase} from './iAddBookUseCase'
import {Book} from '../entity/book'
import {IBookService} from '../service/iBookservice'

export class AddBookUseCase implements IAddBookUseCase {

    constructor(private readonly bookService: IBookService) {
    }

    async addBook(book: Book, output: (book: Book) => void): Promise<void> {
        await this.bookService.storeBook(book)
        output(book)
    }
}