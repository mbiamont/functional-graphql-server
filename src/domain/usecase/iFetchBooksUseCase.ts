import {Book} from '../entity/book'

export interface IFetchBooksUseCase {

    fetchBooks(output: (books: Book[]) => void): Promise<void>
}