import {IBookService} from '../service/iBookservice'
import {IFetchBooksUseCase} from './iFetchBooksUseCase'
import {Book} from '../entity/book'

export class FetchBooksUseCase implements IFetchBooksUseCase {

    constructor(private readonly bookService: IBookService) {
    }

    async fetchBooks(output: (books: Book[]) => void): Promise<void> {
        const books = await this.bookService.getAllBooks()
        output(books)
    }
}