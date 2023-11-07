'use client';

import { Checkbox, createTheme } from '@mantine/core';

export const checkboxTheme = createTheme({
  components: {
    Checkbox: Checkbox.extend({
      defaultProps: {
        size: 'sm',
      },
    }),
  },
});
