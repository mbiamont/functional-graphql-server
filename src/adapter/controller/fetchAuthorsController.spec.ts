import {authorFactory} from '../../__factories__/author'
import {createFetchAuthorsController} from './fetchAuthorsController'
import {FetchAuthorsUseCase} from '../../domain/usecase/@types'

describe('FetchAuthorsController', () => {

    const authors = [authorFactory.build(), authorFactory.build()]

    const mockPerformFetchAuthors: FetchAuthorsUseCase = jest.fn().mockImplementation((output) => Promise.resolve(output(authors)))

    const onFetchAuthorsCalled = createFetchAuthorsController(mockPerformFetchAuthors)

    describe('onFetchAuthorsCalled', () => {

        it('should call the useCase and return its output', async () => {
            const actual = await onFetchAuthorsCalled()

            expect(mockPerformFetchAuthors).toBeCalled()
            expect(actual).toEqual(authors)
        })
    })
})