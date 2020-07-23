import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { light } from '../../styles/colors';

export default function WrapperBrowserRouter({ children }) {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
