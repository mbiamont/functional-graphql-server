import {IFetchBooksController} from '../../platform/controller/iFetchBooksController'
import {Book} from '../../domain/entity/book'
import {FetchBooksUseCase} from '../../domain/usecase/@types'

export class FetchBooksController implements IFetchBooksController {

    constructor(private readonly performFetchBooks: FetchBooksUseCase) {
    }

    async onFetchBooksCalled(): Promise<Book[]> {
        return new Promise((resolve) => this.performFetchBooks((books => resolve(books))))
    }
}