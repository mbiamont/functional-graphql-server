import {authorFactory} from '../../__factories__/author'
import {bookFactory} from '../../__factories__/book'
import {createFetchBooksUseCase} from './fetchBooksUseCase'
import {GetAllBooks} from '../service/@types'

describe('FetchBooksUseCase', () => {
    const author1 = authorFactory.build()
    const author2 = authorFactory.build()

    const book1 = bookFactory.build({
        author: author1
    })
    const book2 = bookFactory.build({
        author: author2
    })
    const book3 = bookFactory.build({
        author: author1
    })

    const mockGetAllBooks: GetAllBooks = jest.fn().mockImplementation(() => Promise.resolve([book1, book2, book3]))

    const performFetchBooks = createFetchBooksUseCase(mockGetAllBooks)

    describe('fetchBooks', () => {
        const expected = [book1, book2, book3]

        const mockOutput = jest.fn()

        it('should get books from service and call output with all books', async () => {
            await performFetchBooks(mockOutput)

            expect(mockGetAllBooks).toBeCalled()
            expect(mockOutput).toBeCalledWith(expected)
        })
    })
})