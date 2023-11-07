'use client';

import { createTheme, Stack } from '@mantine/core';

export const stackTheme = createTheme({
  components: {
    Stack: Stack.extend({
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-white)',
          borderRadius: '8px',
          boxShadow: '0 2px 8px 0 rgba(101, 106, 126, 0.3)',
        },
      },
    }),
  },
});
