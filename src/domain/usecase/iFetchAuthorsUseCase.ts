import {Author} from '../entity/author'

export interface IFetchAuthorsUseCase {

    fetchAuthors(output: (authors: Author[]) => void): Promise<void>
}