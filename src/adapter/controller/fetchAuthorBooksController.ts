import {IFetchAuthorBooksController} from '../../platform/controller/iFetchAuthorBooksController'
import {IFetchAuthorBooksUseCase} from '../../domain/usecase/iFetchAuthorBooksUseCase'
import {Book} from '../../domain/entity/book'

export class FetchAuthorBooksController implements IFetchAuthorBooksController {
    
    constructor(private readonly fetchAuthorBooksUseCase: IFetchAuthorBooksUseCase) {
    }

    async onFetchAuthorBooks(authorName: string): Promise<Book[]> {
        return new Promise((resolve) => this.fetchAuthorBooksUseCase.fetchAuthorBooks(authorName, (books: Book[]) => resolve(books)))
    }
}