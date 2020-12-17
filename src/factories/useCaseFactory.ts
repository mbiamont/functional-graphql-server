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

export const useCaseFactory = {

    provideFetchBooksUseCase: (getAllBooks: GetAllBooks): FetchBooksUseCase => createFetchBooksUseCase(getAllBooks),

    provideFetchAuthorsUseCase: (getAllBooks: GetAllBooks): FetchAuthorsUseCase =>createFetchAuthorsUseCase(getAllBooks),

    provideAddBookUseCase: (storeBook: StoreBook): AddBookUseCase => createAddBookUseCase(storeBook),

    provideFetchAuthorBooksUseCase: (getAllBooks: GetAllBooks): FetchAuthorBooksUseCase => createFetchAuthorBooksUseCase(getAllBooks)
}