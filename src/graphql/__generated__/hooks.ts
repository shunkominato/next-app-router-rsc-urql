import * as Operations from '@/src/graphql/__generated__/operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useTodoListQuery(options?: Omit<Urql.UseQueryArgs<Operations.TodoListQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.TodoListQuery, Operations.TodoListQueryVariables>({ query: Operations.TodoListDocument, ...options });
};