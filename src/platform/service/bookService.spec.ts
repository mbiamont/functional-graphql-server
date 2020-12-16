import {createGetAllBooks, createStoreBook} from './bookService'
import {bookFactory} from '../../__factories__/book'


describe('GetAllBooks', () => {

    const book1 = bookFactory.build()
    const book2 = bookFactory.build()
    const books = [book1, book2]

    const getAllBooks = createGetAllBooks(books)

    it('should return books', async () => {
        const actual = await getAllBooks()

        expect(actual).toEqual(books)
    })
})

describe('StoreBook', () => {

    const book1 = bookFactory.build()
    const book2 = bookFactory.build()
    const books = [book1]

    const expected = [book1, book2]

    const storeBook = createStoreBook(books)

    it('should push book into the array', async () => {
        await storeBook(book2)

        expect(books).toEqual(expected)
    })
})