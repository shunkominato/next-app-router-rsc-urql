import { TodoListDocument, TodoListQuery } from '@/src/graphql/__generated__/operations';
// import { TodoListDocument, TodoListQuery } from '@/src/generated/graphql';
import { getClient } from '../../page';
import User from './User';

export default async function TodoList() {
  // const TodoListDocument = gql`
  //   query todoList {
  //     todos {
  //       text
  //       done
  //     }
  //   }
  // `;
  const res = await getClient().query<TodoListQuery>(TodoListDocument, {});
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
