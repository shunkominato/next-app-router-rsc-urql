'use client';

import { createTheme, TextInput } from '@mantine/core';

export const textInputTheme = createTheme({
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        size: 'md',
      },
      styles: {
        input: {
          backgroundColor: '#F4F8FA',
          borderRadius: '5px',
          boxShadow: '0 1px 4px 0 rgba(101, 106, 126, 0.15)',
          fontSize: '0.875rem',
        },
        label: {
          fontSize: '0.875rem',
        },
      },
    }),
  },
});
