import {authorFactory} from '../../__factories__/author'
import {FetchAuthorsController} from './fetchAuthorsController'
import {FetchAuthorsUseCase} from '../../domain/usecase/@types'

describe('FetchAuthorsController', () => {

    const authors = [authorFactory.build(), authorFactory.build()]

    const mockPerformFetchAuthors: FetchAuthorsUseCase = jest.fn().mockImplementation((output) => Promise.resolve(output(authors)))

    const controller = new FetchAuthorsController(mockPerformFetchAuthors)

    describe('onFetchAuthorsCalled', () => {

        it('should call the useCase and return its output', async () => {
            const actual = await controller.onFetchAuthorsCalled()

            expect(mockPerformFetchAuthors).toBeCalled()
            expect(actual).toEqual(authors)
        })
    })
})