import {IFetchAuthorBooksController} from '../../platform/controller/iFetchAuthorBooksController'
import {Book} from '../../domain/entity/book'
import {FetchAuthorBooksUseCase} from '../../domain/usecase/@types'

export class FetchAuthorBooksController implements IFetchAuthorBooksController {
    
    constructor(private readonly performFetchAuthorBooks: FetchAuthorBooksUseCase) {
    }

    async onFetchAuthorBooks(authorName: string): Promise<Book[]> {
        return new Promise((resolve) => this.performFetchAuthorBooks(authorName, (books: Book[]) => resolve(books)))
    }
}