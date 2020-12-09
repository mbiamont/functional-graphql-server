import {IFetchAuthorsUseCase} from '../../domain/usecase/iFetchAuthorsUseCase'
import {authorFactory} from '../../__factories__/author'
import {FetchAuthorsController} from './fetchAuthorsController'

describe('FetchAuthorsController', () => {

    const authors = [authorFactory.build(), authorFactory.build()]

    const mockFetchAuthorsUseCase: IFetchAuthorsUseCase = {
        fetchAuthors: jest.fn().mockImplementation((output) => Promise.resolve(output(authors)))
    }

    const controller = new FetchAuthorsController(mockFetchAuthorsUseCase)

    describe('onFetchAuthorsCalled', () => {

        it('should call the useCase and return its output', async () => {
            const actual = await controller.onFetchAuthorsCalled()

            expect(mockFetchAuthorsUseCase.fetchAuthors).toBeCalled()
            expect(actual).toEqual(authors)
        })
    })
})