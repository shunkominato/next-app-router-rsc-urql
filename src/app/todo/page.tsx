import { Suspense } from 'react';
import ClientTodoList from './_ClientTodoList';
import TodoList from './_TodoList';

export default function Todo() {
  return (
    <main>
      <h1>This is rendered as part of an RSC</h1>
      <Suspense fallback={<div>サスペンドしたらこれが表示される</div>}>
        <TodoList />
        -----------------------------------
        <ClientTodoList />
      </Suspense>
    </main>
  );
}
