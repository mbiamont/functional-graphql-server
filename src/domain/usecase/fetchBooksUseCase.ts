import {IFetchBooksUseCase} from './iFetchBooksUseCase'
import {Book} from '../entity/book'
import {GetAllBooks} from '../service/@types'

export class FetchBooksUseCase implements IFetchBooksUseCase {

    constructor(private readonly getAllBooks: GetAllBooks) {
    }

    async fetchBooks(output: (books: Book[]) => void): Promise<void> {
        const books = await this.getAllBooks()
        output(books)
    }
}