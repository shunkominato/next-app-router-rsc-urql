import { Meta, StoryObj } from '@storybook/react';
import { BurgerMenu } from '.';

const meta = {
  title: 'BurgerMenu',
  component: BurgerMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof BurgerMenu>;

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const _BurgerMenu: Story = {
  render: (arg) => <BurgerMenu {...arg}>BurgerMenu</BurgerMenu>,
};
