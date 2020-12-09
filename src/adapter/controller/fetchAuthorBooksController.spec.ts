import {bookFactory} from '../../__factories__/book'
import {IFetchAuthorBooksUseCase} from '../../domain/usecase/iFetchAuthorBooksUseCase'
import {FetchAuthorBooksController} from './fetchAuthorBooksController'
import {authorFactory} from '../../__factories__/author'

describe('FetchAuthorBooksController', () => {

    const books = [bookFactory.build(), bookFactory.build()]

    const mockFetchAuthorBooksUseCase: IFetchAuthorBooksUseCase = {
        fetchAuthorBooks: jest.fn().mockImplementation((name, output) => Promise.resolve(output(books)))
    }

    const controller = new FetchAuthorBooksController(mockFetchAuthorBooksUseCase)

    describe('onFetchAuthorBooks', () => {

        const authorName = authorFactory.build().name

        it('should call the useCase with the given author name nd return its output', async () => {
            const actual = await controller.onFetchAuthorBooks(authorName)

            expect(mockFetchAuthorBooksUseCase.fetchAuthorBooks).toBeCalledWith(authorName, expect.anything())
            expect(actual).toEqual(books)
        })
    })
})