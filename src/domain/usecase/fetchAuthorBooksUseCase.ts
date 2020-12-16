import {Book} from '../entity/book'
import {GetAllBooks} from '../service/@types'
import {FetchAuthorBooksUseCase} from './@types'

export const createFetchAuthorBooksUseCase = (
    getAllBooks: GetAllBooks
): FetchAuthorBooksUseCase => async (authorName: string, output: (books: Book[]) => void): Promise<void> => {
    const books = await getAllBooks()
        .then((books) => books.filter(b => b.author.name == authorName))

    output(books)
}