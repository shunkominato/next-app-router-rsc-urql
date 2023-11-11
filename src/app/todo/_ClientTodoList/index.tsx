'use client';

import { useState } from 'react';
import { useTodoListQuery } from '@/src/graphql/__generated__/hooks';
import { TodoListDocument, TodoListQuery } from '@/src/graphql/__generated__/operations';
// import { TodoListDocument, TodoListQuery } from '@/src/generated/graphql';
import { getClient } from '../../page';
import User from './User';

export default function ClientTodoList() {
  const [res] = useTodoListQuery();
  const { data } = res;

  // const TodoListDocument = gql`
  //   query todoList {
  //     todos {
  //       text
  //       done
  //     }
  //   }
  // `;
  // const res = await getClient().query<TodoListQuery>(TodoListDocument, {});
  // const [res] = useTodoListQuery();

  return (
    <div>
      <ul>
        {res.data?.todos.map((todo, index) => (
          <>
            <li key={index}>{todo.text}</li>
            <User user={todo.user} />
            {typeof window !== 'undefined' ? 'クライアント' : 'サーバー'}
          </>
        ))}
      </ul>
    </div>
  );
}
