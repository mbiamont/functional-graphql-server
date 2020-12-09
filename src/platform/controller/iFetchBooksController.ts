import {Book} from '../../domain/entity/book'

export interface IFetchBooksController {

    onFetchBooksCalled(): Promise<Book[]>
}