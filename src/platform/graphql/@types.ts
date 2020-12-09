export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Book>>;
  authors?: Maybe<Array<Author>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Book;
};


export type MutationAddBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  title: Scalars['String'];
  author: Author;
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
  books?: Maybe<Array<Book>>;
};
