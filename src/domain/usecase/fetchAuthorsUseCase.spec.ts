import {authorFactory} from '../../__factories__/author'
import {bookFactory} from '../../__factories__/book'
import {IBookService} from '../service/iBookservice'
import {FetchAuthorsUseCase} from './fetchAuthorsUseCase'

describe('FetchAuthorsUseCase', () => {
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

    const useCase = new FetchAuthorsUseCase(mockBookService)

    describe('fetchAuthors', () => {
        const expected = [author1, author2]

        const mockOutput = jest.fn()

        it('should get books from service and call output with all author without duplicate', async () => {
            await useCase.fetchAuthors(mockOutput)

            expect(mockBookService.getAllBooks).toBeCalled()
            expect(mockOutput).toBeCalledWith(expected)
        })
    })
})