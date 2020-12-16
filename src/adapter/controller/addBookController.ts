import {IAddBookController} from '../../platform/controller/iAddBookController'
import {Book} from '../../domain/entity/book'
import {AddBookUseCase} from '../../domain/usecase/@types'

export class AddBookController implements IAddBookController {

    constructor(private readonly performAddBook: AddBookUseCase) {
    }

    async onAddBookCalled(title: string, author: string): Promise<Book> {
        const book: Book = {
            title,
            author: {
                name: author
            }
        }

        return new Promise((resolve) => this.performAddBook(book, (storedBook) => resolve(storedBook)))
    }
}