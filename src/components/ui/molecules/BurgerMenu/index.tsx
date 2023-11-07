import { Burger } from '@mantine/core';

type Props = {
  opened: boolean;
  onClick: () => void;
};
export function BurgerMenu({ opened, onClick }: Props) {
  return (
    <div className='h-9 w-9 rounded-full bg-purple-700 pt-px text-center shadow-md'>
      <Burger
        opened={opened}
        onClick={onClick}
        hiddenFrom='sm'
        color='white'
        transitionDuration={200}
        aria-label='Toggle navigation'
      />
    </div>
  );
}
