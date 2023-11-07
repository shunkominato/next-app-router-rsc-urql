import { useTodoListQuery } from '@/src/generated/graphql';

export default async function TodoList() {
  const [res] = useTodoListQuery();
  const { data } = res;

  return (
    <div>
      <ul>{data?.todos.map((todo, index) => <li key={index}>{todo.text}</li>)}</ul>
    </div>
  );
}
