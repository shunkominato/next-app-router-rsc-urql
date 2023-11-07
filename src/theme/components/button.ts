'use client';

import { Button, createTheme } from '@mantine/core';

export const buttonTheme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        size: 'md',
        color: 'violet',
      },
      styles: {
        root: {
          // backgroundColor: '#F4F8FA',
          // borderRadius: '5px',
          boxShadow: '0 2px 8px 0 rgba(101, 106, 126, 0.3)',
        },
      },
    }),
  },
});
