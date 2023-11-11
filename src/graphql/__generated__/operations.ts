import * as Types from './type';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UserFragment = { __typename?: 'User', id: string, name: string };

export type TodoListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodoListQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', text: string, done: boolean, user: { __typename?: 'User', id: string, name: string } }> };

export type TodoFragment = { __typename?: 'Todo', id: string, text: string, done: boolean };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
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
    text
    done
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;