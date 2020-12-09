import {IAddBookController} from '../../platform/controller/iAddBookController'
import {IAddBookUseCase} from '../../domain/usecase/iAddBookUseCase'
import {Book} from '../../domain/entity/book'

export class AddBookController implements IAddBookController {

    constructor(private readonly addBookUseCase: IAddBookUseCase) {
    }

    async onAddBookCalled(title: string, author: string): Promise<Book> {
        const book: Book = {
            title,
            author: {
                name: author
            }
        }

        return new Promise((resolve) => this.addBookUseCase.addBook(book, (storedBook) => resolve(storedBook)))
    }
}