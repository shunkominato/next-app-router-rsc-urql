import { TodoListDocument, TodoListQuery } from '@/src/generated/graphql';
import { getClient } from '../../page';
import User from './_User';

export default async function TodoList() {
  const res = await getClient().query<TodoListQuery>(TodoListDocument, {});
  // const [res] = useTodoListQuery();

  return (
    <div>
      <ul>
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
