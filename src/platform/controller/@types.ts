import {Book} from '../../domain/entity/book'
import {Author} from '../../domain/entity/author'

export type AddBookController = (title: string, author: string) => Promise<Book>

export type FetchAuthorBooksController = (authorName: string) => Promise<Book[]>

export type FetchAuthorsController = () => Promise<Author[]>

export type FetchBooksController = () => Promise<Book[]>