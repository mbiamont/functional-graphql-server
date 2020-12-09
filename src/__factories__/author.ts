import {Factory} from 'rosie'
import {name} from 'faker'
import {Author} from '../domain/entity/author'

export const authorFactory = new Factory<Author>()
    .attr('name', () => `${name.firstName()} ${name.lastName()}`)