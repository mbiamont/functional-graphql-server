import {IFetchAuthorsController} from '../../platform/controller/iFetchAuthorsController'
import {Author} from '../../domain/entity/author'
import {FetchAuthorsUseCase} from '../../domain/usecase/@types'

export class FetchAuthorsController implements IFetchAuthorsController{
    
    constructor(private readonly performFetchAuthors: FetchAuthorsUseCase) {
    }

    async onFetchAuthorsCalled(): Promise<Author[]> {
        return new Promise((resolve) => this.performFetchAuthors((authors => resolve(authors))))
    }
}