import {IFetchAuthorsUseCase} from '../../domain/usecase/iFetchAuthorsUseCase'
import {IFetchAuthorsController} from '../../platform/controller/iFetchAuthorsController'
import {Author} from '../../domain/entity/author'

export class FetchAuthorsController implements IFetchAuthorsController{
    
    constructor(private readonly fetchAuthorsUseCase: IFetchAuthorsUseCase) {
    }

    async onFetchAuthorsCalled(): Promise<Author[]> {
        return new Promise((resolve) => this.fetchAuthorsUseCase.fetchAuthors((authors => resolve(authors))))
    }
}