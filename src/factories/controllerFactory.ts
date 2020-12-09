import {IAddBookController} from '../platform/controller/iAddBookController'
import {AddBookController} from '../adapter/controller/addBookController'
import {IAddBookUseCase} from '../domain/usecase/iAddBookUseCase'
import {IFetchBooksUseCase} from '../domain/usecase/iFetchBooksUseCase'
import {IFetchBooksController} from '../platform/controller/iFetchBooksController'
import {FetchBooksController} from '../adapter/controller/fetchBooksController'
import {IFetchAuthorsController} from '../platform/controller/iFetchAuthorsController'
import {IFetchAuthorsUseCase} from '../domain/usecase/iFetchAuthorsUseCase'
import {FetchAuthorsController} from '../adapter/controller/fetchAuthorsController'
import {IFetchAuthorBooksUseCase} from '../domain/usecase/iFetchAuthorBooksUseCase'
import {FetchAuthorBooksController} from '../adapter/controller/fetchAuthorBooksController'
import {IFetchAuthorBooksController} from '../platform/controller/iFetchAuthorBooksController'

export class ControllerFactory {

    provideFetchBooksController(fetchBooksUseCase: IFetchBooksUseCase): IFetchBooksController {
        return new FetchBooksController(fetchBooksUseCase)
    }

    provideFetchAuthorsController(fetchAuthorsUseCase: IFetchAuthorsUseCase): IFetchAuthorsController {
        return new FetchAuthorsController(fetchAuthorsUseCase)
    }

    provideAddBookController(addBookUseCase: IAddBookUseCase): IAddBookController {
        return new AddBookController(addBookUseCase)
    }

    provideFetchAuthorBookController(fetchAuthorBooksUseCase: IFetchAuthorBooksUseCase): IFetchAuthorBooksController {
        return new FetchAuthorBooksController(fetchAuthorBooksUseCase)
    }
}