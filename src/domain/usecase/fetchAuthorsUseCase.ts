import {IFetchAuthorsUseCase} from './iFetchAuthorsUseCase'
import {Author} from '../entity/author'
import {IBookService} from '../service/iBookservice'

export class FetchAuthorsUseCase implements IFetchAuthorsUseCase {

    constructor(private readonly bookService: IBookService) {
    }

    async fetchAuthors(output: (authors: Author[]) => void): Promise<void> {
        const authors = new Map<string, Author>()
        await this.bookService.getAllBooks()
            .then((books) => books.forEach(b => authors.set(b.author.name, b.author)))

        output([...authors.values()])
    }
}