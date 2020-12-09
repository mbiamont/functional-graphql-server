import {IFetchBooksController} from '../../platform/controller/iFetchBooksController'
import {Book} from '../../domain/entity/book'
import {IFetchBooksUseCase} from '../../domain/usecase/iFetchBooksUseCase'

export class FetchBooksController implements IFetchBooksController {

    constructor(private readonly fetchBooksUseCase: IFetchBooksUseCase) {
    }

    async onFetchBooksCalled(): Promise<Book[]> {
        return new Promise((resolve) => this.fetchBooksUseCase.fetchBooks((books => resolve(books))))
    }
}