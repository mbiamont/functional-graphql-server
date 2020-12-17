import {IResolvers} from 'graphql-tools/dist/Interfaces'
import {useCaseFactory} from './useCaseFactory'
import {Book} from '../domain/entity/book'
import {serviceFactory} from './serviceFactory'
import {controllerFactory} from './controllerFactory'
import {createAppResolvers} from '../platform/graphql/graphQlResolvers'

export const appContainer = {

    generateResolvers: (store: Book[] = []): IResolvers => createAppResolvers(
        controllerFactory.provideFetchBooksController(useCaseFactory.provideFetchBooksUseCase(serviceFactory.provideGetAllBooks(store))),
        controllerFactory.provideFetchAuthorsController(useCaseFactory.provideFetchAuthorsUseCase(serviceFactory.provideGetAllBooks(store))),
        controllerFactory.provideAddBookController(useCaseFactory.provideAddBookUseCase(serviceFactory.provideStoreBook(store))),
        controllerFactory.provideFetchAuthorBookController(useCaseFactory.provideFetchAuthorBooksUseCase(serviceFactory.provideGetAllBooks(store)))
    )
}