import {bookFactory} from '../../__factories__/book'
import {FetchAuthorBooksController} from './fetchAuthorBooksController'
import {authorFactory} from '../../__factories__/author'
import {FetchAuthorBooksUseCase} from '../../domain/usecase/@types'

describe('FetchAuthorBooksController', () => {
    const books = [bookFactory.build(), bookFactory.build()]

    const mockPerformFetchAuthorBooks: FetchAuthorBooksUseCase = jest.fn().mockImplementation((name, output) => Promise.resolve(output(books)))
    const controller = new FetchAuthorBooksController(mockPerformFetchAuthorBooks)

    describe('onFetchAuthorBooks', () => {
        const authorName = authorFactory.build().name

        it('should call the useCase with the given author name nd return its output', async () => {
            const actual = await controller.onFetchAuthorBooks(authorName)

            expect(mockPerformFetchAuthorBooks).toBeCalledWith(authorName, expect.anything())
            expect(actual).toEqual(books)
        })
    })
})