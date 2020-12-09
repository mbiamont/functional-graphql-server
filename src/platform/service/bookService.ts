import {Book} from '../../domain/entity/book'
import {IBookService} from '../../domain/service/iBookservice'

export class BookService implements IBookService {

    constructor(private books: Book[] = []) {
    }

    async getAllBooks(): Promise<Book[]> {
        return this.books
    }

    async storeBook(book: Book): Promise<void> {
        this.books.push(book)
    }

}