import {GetAllBooks, StoreBook} from '../domain/service/@types'
import {
    AddBookUseCase,
    FetchAuthorBooksUseCase,
    FetchAuthorsUseCase,
    FetchBooksUseCase
} from '../domain/usecase/@types'
import {createFetchBooksUseCase} from '../domain/usecase/fetchBooksUseCase'
import {createFetchAuthorsUseCase} from '../domain/usecase/fetchAuthorsUseCase'
import {createAddBookUseCase} from '../domain/usecase/addBookUseCase'
import {createFetchAuthorBooksUseCase} from '../domain/usecase/fetchAuthorBooksUseCase'

export class UseCaseFactory {

    provideFetchBooksUseCase(getAllBooks: GetAllBooks): FetchBooksUseCase {
        return createFetchBooksUseCase(getAllBooks)
    }

    provideFetchAuthorsUseCase(getAllBooks: GetAllBooks): FetchAuthorsUseCase {
        return createFetchAuthorsUseCase(getAllBooks)
    }

    provideAddBookUseCase(storeBook: StoreBook): AddBookUseCase {
        return createAddBookUseCase(storeBook)
    }

    provideFetchAuthorBooksUseCase(getAllBooks: GetAllBooks): FetchAuthorBooksUseCase {
        return createFetchAuthorBooksUseCase(getAllBooks)
    }
}