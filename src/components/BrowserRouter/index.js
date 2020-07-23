import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

export default function WrapperBrowserRouter({ children }) {
  const colorSchema = useSelector((state) => state.theme.colorSchema);

  return (
    <ThemeProvider theme={colorSchema}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}
