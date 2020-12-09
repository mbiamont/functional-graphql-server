import {IAddBookUseCase} from '../domain/usecase/iAddBookUseCase'
import {AddBookUseCase} from '../domain/usecase/addBookUseCase'
import {IBookService} from '../domain/service/iBookservice'
import {FetchBooksUseCase} from '../domain/usecase/fetchBooksUseCase'
import {IFetchBooksUseCase} from '../domain/usecase/iFetchBooksUseCase'
import {IFetchAuthorsUseCase} from '../domain/usecase/iFetchAuthorsUseCase'
import {FetchAuthorsUseCase} from '../domain/usecase/fetchAuthorsUseCase'
import {IFetchAuthorBooksUseCase} from '../domain/usecase/iFetchAuthorBooksUseCase'
import {FetchAuthorBooksUseCase} from '../domain/usecase/fetchAuthorBooksUseCase'

export class UseCaseFactory {

    provideFetchBooksUseCase(bookService: IBookService): IFetchBooksUseCase {
        return new FetchBooksUseCase(bookService)
    }
    
    provideFetchAuthorsUseCase(bookService: IBookService): IFetchAuthorsUseCase {
        return new FetchAuthorsUseCase(bookService)
    }

    provideAddBookUseCase(bookService: IBookService): IAddBookUseCase {
        return new AddBookUseCase(bookService)
    }
    
    provideFetchAuthorBooksUseCase(bookService: IBookService): IFetchAuthorBooksUseCase {
        return new FetchAuthorBooksUseCase(bookService)
    }
}