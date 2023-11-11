import { UserFragment } from '@/src/graphql/__generated__/operations';

type User = {
  user: UserFragment;
};

export default function User({ user }: User) {
  return <div>{user.name}</div>;
}
