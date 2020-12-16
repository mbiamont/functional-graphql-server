import {IFetchAuthorBooksUseCase} from './iFetchAuthorBooksUseCase'
import {Book} from '../entity/book'
import {GetAllBooks} from '../service/@types'

export class FetchAuthorBooksUseCase implements IFetchAuthorBooksUseCase {

    constructor(private readonly getAllBooks: GetAllBooks) {
    }

    async fetchAuthorBooks(authorName: string, output: (books: Book[]) => void): Promise<void> {
        const books = await this.getAllBooks()
            .then((books) => books.filter(b => b.author.name == authorName))

        output(books)
    }
}