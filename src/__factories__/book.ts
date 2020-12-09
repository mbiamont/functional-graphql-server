import {Book} from '../domain/entity/book'
import {Factory} from 'rosie'
import {lorem} from 'faker'
import {authorFactory} from './author'

export const bookFactory = new Factory<Book>()
    .attr('title', () => lorem.words())
    .attr('author', () => authorFactory.build())