'use client';

import { createTheme, mergeThemeOverrides } from '@mantine/core';
import { buttonTheme } from './components/button';
import { checkboxTheme } from './components/checkBox';
import { containerTheme } from './components/container';
import { textInputTheme } from './components/textInput';

const baseTheme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  shadows: {
    xs: '0px 2px 4px rgba(101, 106, 126, 0.1)', // 修正: アルファ値を0.2に変更
    sm: '0px 2px 6px rgba(101, 106, 126, 0.15)', // 修正: アルファ値を0.2に変更
    md: '0 2px 8px 0 rgba(101, 106, 126, 0.2)', // 修正: アルファ値を0.3に変更
    lg: '0 4px 16px 0 rgba(101, 106, 126, 0.3)', // 修正: アルファ値を0.4に変更
  },
});

export const theme = mergeThemeOverrides(
  baseTheme,
  containerTheme,
  textInputTheme,
  checkboxTheme,
  buttonTheme
);
