import {createGetAllBooks, createStoreBook} from '../platform/service/bookService'
import {GetAllBooks, StoreBook} from '../domain/service/@types'
import {Book} from '../domain/entity/book'

export const serviceFactory = {

    provideGetAllBooks: (store: Book[]): GetAllBooks => createGetAllBooks(store),

    provideStoreBook: (store: Book[]): StoreBook => createStoreBook(store)
}