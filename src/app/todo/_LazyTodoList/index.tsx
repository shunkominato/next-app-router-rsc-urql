'use client';

import { Button } from '@mantine/core';
import { useState } from 'react';
import { PraimaryButton } from '@/src/components/ui/Button/Button';
import { useTodoListQuery } from '@/src/graphql/__generated__/hooks';
import { TodoListDocument, TodoListQuery } from '@/src/graphql/__generated__/operations';
// import { TodoListDocument, TodoListQuery } from '@/src/generated/graphql';
import { getClient } from '../../page';
import User from './User';

export default function LazyClientTodoList() {
  const [res, fetch] = useTodoListQuery({ pause: true, requestPolicy: 'network-only' });
  const { data, fetching, error } = res;

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
      {/* {typeof window !== 'undefined' ? 'クライアント' : 'サーバー'} */}
      <ul>
        <Button type='button' onClick={fetch} />
        クライアンどsss
        {fetching && 'loading'}
        {res.data?.todos.map((todo, index) => (
          <>
            <li key={index}>{todo.text}</li>
            <User user={todo.user} />
          </>
        ))}
      </ul>
    </div>
  );
}
