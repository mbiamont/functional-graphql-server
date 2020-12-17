import {Book} from '../../domain/entity/book'
import {FetchBooksUseCase} from '../../domain/usecase/@types'
import {FetchBooksController} from '../../platform/controller/@types'

export const createFetchBooksController = (performFetchBooks: FetchBooksUseCase): FetchBooksController => async (): Promise<Book[]> => {
    return new Promise((resolve) => performFetchBooks((books => resolve(books))))
}