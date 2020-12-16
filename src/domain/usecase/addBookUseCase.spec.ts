import {createAddBookUseCase} from './addBookUseCase'
import {bookFactory} from '../../__factories__/book'
import {StoreBook} from '../service/@types'

describe('AddBookUseCase', () => {

    const mockStoreBook: StoreBook = jest.fn()
    const performAddBook = createAddBookUseCase(mockStoreBook)

    describe('addBook', () => {

        const book = bookFactory.build()

        const mockOutput = jest.fn()

        it('should call bookservice and call output with input book', async () => {
            await performAddBook(book, mockOutput)

            expect(mockStoreBook).toBeCalledWith(book)
            expect(mockOutput).toBeCalledWith(book)
        })
    })

})