import {Book} from '../entity/book'

export interface IFetchAuthorBooksUseCase {

    fetchAuthorBooks(authorName: string, output: (books: Book[]) => void): Promise<void>
}