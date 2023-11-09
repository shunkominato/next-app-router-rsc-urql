import gql from 'graphql-tag';
import * as Urql from 'urql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
};

export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

export type UserFragment = { __typename?: 'User'; id: string; name: string };

export type TodoListQueryVariables = Exact<{ [key: string]: never }>;

export type TodoListQuery = {
  __typename?: 'Query';
  todos: Array<{
    __typename?: 'Todo';
    id: string;
    text: string;
    done: boolean;
    user: { __typename?: 'User'; id: string; name: string };
  }>;
};

export type TodoFragment = { __typename?: 'Todo'; id: string; text: string; done: boolean };

export const UserFragmentDoc = gql`
  fragment User on User {
    id
    name
  }
`;
export const TodoFragmentDoc = gql`
  fragment Todo on Todo {
    id
    text
    done
  }
`;
export const TodoListDocument = gql`
  query todoList {
    todos {
      ...Todo
      user {
        ...User
      }
    }
  }
  ${TodoFragmentDoc}
  ${UserFragmentDoc}
`;

export function useTodoListQuery(
  options?: Omit<Urql.UseQueryArgs<TodoListQueryVariables>, 'query'>
) {
  return Urql.useQuery<TodoListQuery, TodoListQueryVariables>({
    query: TodoListDocument,
    ...options,
  });
}
