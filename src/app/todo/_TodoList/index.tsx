import { gql } from 'urql';
import { TodoListDocument, TodoListQuery } from '@/src/generated/graphql';
import { getClient } from '../../page';

// export const TodoListDocumenta = gql`
//   query todoList {
//     todos {
//       text
//       done
//     }
//   }
// `;

export default async function TodoList() {
  const res = await getClient().query<TodoListQuery>(TodoListDocument, {});

  return (
    <div>
      <ul>{res.data?.todos.map((todo, index) => <li key={index}>{todo.text}</li>)}</ul>
    </div>
  );
}
