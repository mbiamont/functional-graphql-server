import {BookService} from '../platform/service/bookService'
import {IBookService} from '../domain/service/iBookservice'

export class ServiceFactory {

    private bookService?: BookService

    provideBookService(): IBookService {
        if (this.bookService == null) {
            this.bookService = new BookService()
        }
        return this.bookService
    }
}