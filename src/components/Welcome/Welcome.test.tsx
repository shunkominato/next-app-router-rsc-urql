import { render, screen } from '@/src/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    const text = screen.getByText('this guide');
    expect(text.getAttribute('href')).toBe('https://mantine.dev/guides/next/');
  });
});
