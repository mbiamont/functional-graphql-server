import {IFetchBooksUseCase} from '../../domain/usecase/iFetchBooksUseCase'
import {FetchBooksController} from './fetchBooksController'
import {bookFactory} from '../../__factories__/book'

describe('FetchBooksController', () => {
    
    const books = [bookFactory.build(), bookFactory.build()]
    
    const mockFetchBooksUseCase: IFetchBooksUseCase = {
        fetchBooks: jest.fn().mockImplementation((output) => Promise.resolve(output(books)))
    }
    
    const controller = new FetchBooksController(mockFetchBooksUseCase)
    
    describe('onFetchBooksCalled', () => {
        
        it('should call the useCase and return its output', async () => {
            const actual = await controller.onFetchBooksCalled()

            expect(mockFetchBooksUseCase.fetchBooks).toBeCalled()
            expect(actual).toEqual(books)
        })
    })
})