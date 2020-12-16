import {createGetAllBooks, createStoreBook} from '../platform/service/bookService'
import {GetAllBooks, StoreBook} from '../domain/service/@types'
import {Book} from '../domain/entity/book'

export class ServiceFactory {

    private store?: Book[]

    private provideBookStore(): Book[] {
        if (this.store == null) {
            this.store = []
        }

        return this.store
    }

    provideGetAllBooks(): GetAllBooks {
        return createGetAllBooks(this.provideBookStore())
    }

    provideStoreBook(): StoreBook {
        return createStoreBook(this.provideBookStore())
    }
}