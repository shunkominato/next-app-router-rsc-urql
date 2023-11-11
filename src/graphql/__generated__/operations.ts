import * as Types from './type';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type TodoListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodoListQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', text: string, done: boolean }> };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

export const TodoListDocument = gql`
    query todoList {
  todos {
    text
    done
  }
}
    `;