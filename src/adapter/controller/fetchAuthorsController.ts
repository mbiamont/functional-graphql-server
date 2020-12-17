import {Author} from '../../domain/entity/author'
import {FetchAuthorsUseCase} from '../../domain/usecase/@types'
import {FetchAuthorsController} from '../../platform/controller/@types'

export const createFetchAuthorsController = (
    performFetchAuthors: FetchAuthorsUseCase
): FetchAuthorsController => async (): Promise<Author[]> => {
    return new Promise((resolve) => performFetchAuthors((authors => resolve(authors))))
}