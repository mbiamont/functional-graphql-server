import {Book} from '../entity/book'
import {Author} from '../entity/author'

export type AddBookUseCase = (book: Book, output: (book: Book) => void) => Promise<void>

export type FetchAuthorBooksUseCase = (authorName: string, output: (books: Book[]) => void) => Promise<void>

export type FetchAuthorsUseCase = (output: (authors: Author[]) => void) => Promise<void>

export type FetchBooksUseCase = (output: (books: Book[]) => void) => Promise<void>