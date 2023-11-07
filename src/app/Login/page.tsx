import { Center, Container, Stack } from '@mantine/core';
import { SectionTitle } from '@/src/components/ui/atoms/SectionTitle';
import { Section } from '@/src/components/ui/molecules/Section';
import marginStyle from '@/src/cssModules/base/margin.module.css';
import { Form } from './Form';

export default function Login() {
  return (
    <Section>
      <Container size='xs' className={marginStyle.center}>
        <Stack>
          <Center>
            <SectionTitle title='ログイン' />
          </Center>
          <Form />
        </Stack>
      </Container>
    </Section>
  );
}
