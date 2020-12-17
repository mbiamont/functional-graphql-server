import {Book} from '../../domain/entity/book'
import {AddBookUseCase} from '../../domain/usecase/@types'
import {AddBookController} from '../../platform/controller/@types'

export const createAddBookController = (
    performAddBook: AddBookUseCase
): AddBookController => async (title: string, author: string): Promise<Book> => {
    const book: Book = {
        title,
        author: {
            name: author
        }
    }

    return new Promise((resolve) => performAddBook(book, (storedBook) => resolve(storedBook)))
}