import {Author} from '../entity/author'
import {GetAllBooks} from '../service/@types'
import {FetchAuthorsUseCase} from './@types'

export const createFetchAuthorsUseCase = (
    getAllBooks: GetAllBooks
): FetchAuthorsUseCase => async (output: (authors: Author[]) => void): Promise<void> => {
    const authors = new Map<string, Author>()
    await getAllBooks()
        .then((books) => books.forEach(b => authors.set(b.author.name, b.author)))

    output([...authors.values()])
}