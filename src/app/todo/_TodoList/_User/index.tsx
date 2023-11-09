import { UserFragment } from '@/src/generated/graphql';

type User = {
  user: UserFragment;
};

export default function User({ user }: User) {
  return <div>{user.name}</div>;
}
