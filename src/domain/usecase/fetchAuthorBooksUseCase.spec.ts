import {createFetchAuthorBooksUseCase} from './fetchAuthorBooksUseCase'
import {bookFactory} from '../../__factories__/book'
import {authorFactory} from '../../__factories__/author'
import {GetAllBooks} from '../service/@types'

describe('FetchAuthorBooksUseCase', () => {
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

    const performFetchAuthorBooks = createFetchAuthorBooksUseCase(mockGetAllBooks)

    describe('fetchAuthorBooks', () => {
        const expected = [book1, book3]

        const mockOutput = jest.fn()

        it('should get books from service and call output with only books with the right author', async () => {
            await performFetchAuthorBooks(author1.name, mockOutput)

            expect(mockGetAllBooks).toBeCalled()
            expect(mockOutput).toBeCalledWith(expected)
        })
    })
})