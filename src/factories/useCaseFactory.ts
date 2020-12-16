import {IAddBookUseCase} from '../domain/usecase/iAddBookUseCase'
import {AddBookUseCase} from '../domain/usecase/addBookUseCase'
import {FetchBooksUseCase} from '../domain/usecase/fetchBooksUseCase'
import {IFetchBooksUseCase} from '../domain/usecase/iFetchBooksUseCase'
import {IFetchAuthorsUseCase} from '../domain/usecase/iFetchAuthorsUseCase'
import {FetchAuthorsUseCase} from '../domain/usecase/fetchAuthorsUseCase'
import {IFetchAuthorBooksUseCase} from '../domain/usecase/iFetchAuthorBooksUseCase'
import {FetchAuthorBooksUseCase} from '../domain/usecase/fetchAuthorBooksUseCase'
import {GetAllBooks, StoreBook} from '../domain/service/@types'

export class UseCaseFactory {

    provideFetchBooksUseCase(getAllBooks: GetAllBooks): IFetchBooksUseCase {
        return new FetchBooksUseCase(getAllBooks)
    }
    
    provideFetchAuthorsUseCase(getAllBooks: GetAllBooks): IFetchAuthorsUseCase {
        return new FetchAuthorsUseCase(getAllBooks)
    }

    provideAddBookUseCase(storeBook: StoreBook): IAddBookUseCase {
        return new AddBookUseCase(storeBook)
    }
    
    provideFetchAuthorBooksUseCase(getAllBooks: GetAllBooks): IFetchAuthorBooksUseCase {
        return new FetchAuthorBooksUseCase(getAllBooks)
    }
}