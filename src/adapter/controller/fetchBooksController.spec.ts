import {FetchBooksController} from './fetchBooksController'
import {bookFactory} from '../../__factories__/book'
import {FetchBooksUseCase} from '../../domain/usecase/@types'

describe('FetchBooksController', () => {
    
    const books = [bookFactory.build(), bookFactory.build()]
    
    const mockPerformFetchBooks: FetchBooksUseCase = jest.fn().mockImplementation((output) => Promise.resolve(output(books)))
    
    const controller = new FetchBooksController(mockPerformFetchBooks)
    
    describe('onFetchBooksCalled', () => {
        
        it('should call the useCase and return its output', async () => {
            const actual = await controller.onFetchBooksCalled()

            expect(mockPerformFetchBooks).toBeCalled()
            expect(actual).toEqual(books)
        })
    })
})