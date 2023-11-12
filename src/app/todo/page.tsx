import { Suspense } from 'react';
import ClientTodoList from './_ClientTodoList';
import LazyClientTodoList from './_LazyTodoList';
import TodoList from './_TodoList';

export default function Todo() {
  return (
    <main>
      <h1>This is rendered as part of an RSC</h1>
      <Suspense fallback={<div>サスペンドサーバー</div>}>
        <TodoList />
      </Suspense>
      -----------------------------------
      {/* <Suspense fallback={<div>サスペンドクライアント</div>}> */}
      <ClientTodoList />
      <LazyClientTodoList />
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>サスペンドサーバー</div>}>
        <TodoList />
      </Suspense>
      <Suspense fallback={<div>サスペンドサーバー</div>}>
        <TodoList />
      </Suspense>
      <Suspense fallback={<div>サスペンドサーバー</div>}>
        <TodoList />
      </Suspense> */}
    </main>
  );
}
