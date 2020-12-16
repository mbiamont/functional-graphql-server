import {GraphQlResolvers} from '../platform/graphql/graphQlResolvers'
import {ServiceFactory} from './serviceFactory'
import {UseCaseFactory} from './useCaseFactory'
import {ControllerFactory} from './controllerFactory'
import {IResolvers} from 'graphql-tools/dist/Interfaces'

export class AppContainer {
    private serviceFactory = new ServiceFactory()
    private useCaseFactory = new UseCaseFactory()
    private controllerFactory = new ControllerFactory()

    generateResolvers(): IResolvers {
        return new GraphQlResolvers(
            this.controllerFactory.provideFetchBooksController(this.useCaseFactory.provideFetchBooksUseCase(this.serviceFactory.provideGetAllBooks())),
            this.controllerFactory.provideFetchAuthorsController(this.useCaseFactory.provideFetchAuthorsUseCase(this.serviceFactory.provideGetAllBooks())),
            this.controllerFactory.provideAddBookController(this.useCaseFactory.provideAddBookUseCase(this.serviceFactory.provideStoreBook())),
            this.controllerFactory.provideFetchAuthorBookController(this.useCaseFactory.provideFetchAuthorBooksUseCase(this.serviceFactory.provideGetAllBooks()))
        ).buildResolvers()
    }
}