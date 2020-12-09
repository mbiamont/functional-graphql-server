import {Author} from '../../domain/entity/author'

export interface IFetchAuthorsController {

    onFetchAuthorsCalled(): Promise<Author[]>
}