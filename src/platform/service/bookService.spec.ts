import {BookService} from './bookService'
import {Book} from '../../domain/entity/book'
import {bookFactory} from '../../__factories__/book'

describe('BookService', () => {
    const book1 = bookFactory.build()
    const book2 = bookFactory.build()

    describe('getAllBooks', () => {
        const books = [book1, book2]

        const service = new BookService(books)

        it('should return books', async () => {
            const actual = await service.getAllBooks()

            expect(actual).toEqual(books)
        })
    })

    describe('storeBook', () => {
        const books: Array<Book> = [book1]
        const expected = [book1, book2]

        const service = new BookService(books)

        it('should push book into the array', async () => {
            await service.storeBook(book2)

            expect(books).toEqual(expected)
        })
    })
})