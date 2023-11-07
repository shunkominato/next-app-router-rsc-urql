'use client';

import Link from 'next/link';
import { Button, Center, Checkbox, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormRow } from '@/src/components/ui/atoms/Form/FormRow';

export function Form() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <Center>
      <div className='w-64 '>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <FormRow>
            <TextInput
              label='メールアドレス'
              placeholder='engin@engin.com'
              {...form.getInputProps('email')}
            />
          </FormRow>
          <FormRow>
            <TextInput label='パスワード' />
          </FormRow>
          <FormRow className='text-sm' textRight>
            <Link href='/'>パスワードをお忘れの方はこちら</Link>
          </FormRow>
          <FormRow textRight>
            <Checkbox label='ログイン状態を保持' />
          </FormRow>
          <FormRow textCenter>
            <Button fullWidth>ログイン</Button>
          </FormRow>
        </form>
      </div>
    </Center>
  );
}
