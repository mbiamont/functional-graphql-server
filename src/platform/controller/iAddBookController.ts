import {Book} from '../../domain/entity/book'

export interface IAddBookController {

    onAddBookCalled(title: string, author: string): Promise<Book>
}