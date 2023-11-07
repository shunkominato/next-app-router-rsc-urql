'use client';

import { Container, createTheme } from '@mantine/core';

export const containerTheme = createTheme({
  components: {
    Container: Container.extend({
      styles: {
        root: {
          backgroundColor: 'var(--mantine-color-white)',
          borderRadius: '8px',
          boxShadow: '0 6px 16px 0 rgba(101, 106, 126, 0.2)',
          padding: '16px',
          margin: '16px',
        },
      },
    }),
  },
});
