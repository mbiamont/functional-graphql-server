import {createFetchBooksController} from './fetchBooksController'
import {bookFactory} from '../../__factories__/book'
import {FetchBooksUseCase} from '../../domain/usecase/@types'

describe('FetchBooksController', () => {

    const books = [bookFactory.build(), bookFactory.build()]

    const mockPerformFetchBooks: FetchBooksUseCase = jest.fn().mockImplementation((output) => Promise.resolve(output(books)))

    const onFetchBooksCalled = createFetchBooksController(mockPerformFetchBooks)

    describe('onFetchBooksCalled', () => {

        it('should call the useCase and return its output', async () => {
            const actual = await onFetchBooksCalled()

            expect(mockPerformFetchBooks).toBeCalled()
            expect(actual).toEqual(books)
        })
    })
})