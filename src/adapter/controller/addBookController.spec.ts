import {bookFactory} from '../../__factories__/book'
import {createAddBookController} from './addBookController'
import {Book} from '../../domain/entity/book'
import {AddBookUseCase} from '../../domain/usecase/@types'

describe('AddBookController', () => {

    const book = bookFactory.build()

    const mockPerformAddBook: AddBookUseCase = jest.fn().mockImplementation((input, output) => Promise.resolve(output(book)))

    const onAddBookCalled = createAddBookController(mockPerformAddBook)

    describe('onAddBookCalled', () => {

        const inputTitle = 'foo'
        const inputAuthorName = 'bar'
        const expectedBook: Book = {
            title: inputTitle,
            author: {
                name: inputAuthorName
            }
        }

        it('should call useCase with given book data and return its output', async () => {
            const actual = await onAddBookCalled(inputTitle, inputAuthorName)
            
            expect(mockPerformAddBook).toBeCalledWith(expectedBook, expect.anything())
            expect(actual).toEqual(book)
        })
    })

})