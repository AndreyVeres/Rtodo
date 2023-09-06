import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

const mainTheme = {
  backGround: '#EDF1F3',
  todoBackground: '#fff',
  font: '"Inconsolata", monospace',
};

export const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
export type ThemeType = typeof mainTheme;
