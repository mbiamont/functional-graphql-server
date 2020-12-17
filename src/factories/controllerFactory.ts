import {
    AddBookUseCase,
    FetchAuthorBooksUseCase,
    FetchAuthorsUseCase,
    FetchBooksUseCase
} from '../domain/usecase/@types'
import {createFetchBooksController} from '../adapter/controller/fetchBooksController'
import {createFetchAuthorsController} from '../adapter/controller/fetchAuthorsController'
import {createAddBookController} from '../adapter/controller/addBookController'
import {createFetchAuthorBooksController} from '../adapter/controller/fetchAuthorBooksController'
import {
    FetchAuthorBooksController,
    FetchAuthorsController,
    FetchBooksController, AddBookController
} from '../platform/controller/@types'

export class ControllerFactory {

    provideFetchBooksController(fetchBooksUseCase: FetchBooksUseCase): FetchBooksController {
        return createFetchBooksController(fetchBooksUseCase)
    }

    provideFetchAuthorsController(fetchAuthorsUseCase: FetchAuthorsUseCase): FetchAuthorsController {
        return createFetchAuthorsController(fetchAuthorsUseCase)
    }

    provideAddBookController(addBookUseCase: AddBookUseCase): AddBookController {
        return createAddBookController(addBookUseCase)
    }

    provideFetchAuthorBookController(fetchAuthorBooksUseCase: FetchAuthorBooksUseCase): FetchAuthorBooksController {
        return createFetchAuthorBooksController(fetchAuthorBooksUseCase)
    }
}