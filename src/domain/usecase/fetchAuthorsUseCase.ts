import {IFetchAuthorsUseCase} from './iFetchAuthorsUseCase'
import {Author} from '../entity/author'
import {GetAllBooks} from '../service/@types'

export class FetchAuthorsUseCase implements IFetchAuthorsUseCase {

    constructor(private readonly getAllBooks: GetAllBooks) {
    }

    async fetchAuthors(output: (authors: Author[]) => void): Promise<void> {
        const authors = new Map<string, Author>()
        await this.getAllBooks()
            .then((books) => books.forEach(b => authors.set(b.author.name, b.author)))

        output([...authors.values()])
    }
}