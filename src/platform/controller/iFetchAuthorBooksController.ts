import {Book} from '../../domain/entity/book'

export interface IFetchAuthorBooksController {

    onFetchAuthorBooks(authorName: string): Promise<Book[]>
}