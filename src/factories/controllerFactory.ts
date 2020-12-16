import {IAddBookController} from '../platform/controller/iAddBookController'
import {AddBookController} from '../adapter/controller/addBookController'
import {IFetchBooksController} from '../platform/controller/iFetchBooksController'
import {FetchBooksController} from '../adapter/controller/fetchBooksController'
import {IFetchAuthorsController} from '../platform/controller/iFetchAuthorsController'
import {FetchAuthorsController} from '../adapter/controller/fetchAuthorsController'
import {FetchAuthorBooksController} from '../adapter/controller/fetchAuthorBooksController'
import {IFetchAuthorBooksController} from '../platform/controller/iFetchAuthorBooksController'
import {
    AddBookUseCase,
    FetchAuthorBooksUseCase,
    FetchAuthorsUseCase,
    FetchBooksUseCase
} from '../domain/usecase/@types'

export class ControllerFactory {

    provideFetchBooksController(fetchBooksUseCase: FetchBooksUseCase): IFetchBooksController {
        return new FetchBooksController(fetchBooksUseCase)
    }

    provideFetchAuthorsController(fetchAuthorsUseCase: FetchAuthorsUseCase): IFetchAuthorsController {
        return new FetchAuthorsController(fetchAuthorsUseCase)
    }

    provideAddBookController(addBookUseCase: AddBookUseCase): IAddBookController {
        return new AddBookController(addBookUseCase)
    }

    provideFetchAuthorBookController(fetchAuthorBooksUseCase: FetchAuthorBooksUseCase): IFetchAuthorBooksController {
        return new FetchAuthorBooksController(fetchAuthorBooksUseCase)
    }
}