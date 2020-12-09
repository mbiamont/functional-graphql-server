import {AddBookUseCase} from './addBookUseCase'
import {bookFactory} from '../../__factories__/book'
import {IBookService} from '../service/iBookservice'

describe('AddBookUseCase', () => {

    const mockBookService: IBookService = {
        getAllBooks: jest.fn(),
        storeBook: jest.fn()
    }
    const useCase = new AddBookUseCase(mockBookService)

    describe('addBook', () => {
        
        const book = bookFactory.build()

        const mockOutput = jest.fn()

        it('should call bookservice and call output with input book', async () => {
            await useCase.addBook(book, mockOutput)

            expect(mockBookService.storeBook).toBeCalledWith(book)
            expect(mockOutput).toBeCalledWith(book)
        })
    })

})