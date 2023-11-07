import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BurgerMenu } from '@/src/components/ui/molecules/BurgerMenu';

export function MobileMenu() {
  const [opened, { toggle, close }] = useDisclosure();
  return (
    <div className='pc-hidden'>
      <BurgerMenu opened={opened} onClick={toggle} />
      <Drawer
        position='right'
        opened={opened}
        onClose={close}
        size='70%'
        transitionProps={{
          transition: 'rotate-left',
          duration: 300,
          timingFunction: 'linear',
        }}
        withCloseButton={false}
        classNames={{
          inner: 'top-16',
          overlay: 'top-16',
        }}
      >
        <div className='px-4 pt-[78px] font-bold'>
          <p className='mb-4'>マイページ</p>
          <p className='mb-4'>ログアウト</p>
          <p>ホーム</p>
        </div>
      </Drawer>
    </div>
  );
}
