import {Book} from '../entity/book'
import {StoreBook} from '../service/@types'
import {AddBookUseCase} from './@types'

export const createAddBookUseCase = (
    storeBook: StoreBook
): AddBookUseCase => async (book: Book, output: (book: Book) => void): Promise<void> => {
    await storeBook(book)
    output(book)
}