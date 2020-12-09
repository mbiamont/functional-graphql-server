import {FetchAuthorBooksUseCase} from './fetchAuthorBooksUseCase'
import {bookFactory} from '../../__factories__/book'
import {authorFactory} from '../../__factories__/author'
import {IBookService} from '../service/iBookservice'

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

    const mockBookService: IBookService = {
        getAllBooks: jest.fn().mockImplementation(() => Promise.resolve([book1, book2, book3])),
        storeBook: jest.fn()
    }

    const useCase = new FetchAuthorBooksUseCase(mockBookService)

    describe('fetchAuthorBooks', () => {
        const expected = [book1, book3]

        const mockOutput = jest.fn()

        it('should get books from service and call output with only books with the right author', async () => {
            await useCase.fetchAuthorBooks(author1.name, mockOutput)
            
            expect(mockBookService.getAllBooks).toBeCalled()
            expect(mockOutput).toBeCalledWith(expected)
        })
    })
})