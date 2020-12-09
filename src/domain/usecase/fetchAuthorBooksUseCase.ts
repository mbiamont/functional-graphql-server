import {IBookService} from '../service/iBookservice'
import {IFetchAuthorBooksUseCase} from './iFetchAuthorBooksUseCase'
import {Book} from '../entity/book'

export class FetchAuthorBooksUseCase implements IFetchAuthorBooksUseCase {

    constructor(private readonly bookService: IBookService) {
    }

    async fetchAuthorBooks(authorName: string, output: (books: Book[]) => void): Promise<void> {
        const books = await this.bookService.getAllBooks()
            .then((books) => books.filter(b => b.author.name == authorName))

        output(books)
    }
}