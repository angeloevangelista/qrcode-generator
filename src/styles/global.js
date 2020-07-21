import { createGlobalStyle } from 'styled-components';

import { dark } from './colors';

const colorSchema = dark;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
    
  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    box-sizing: border-box;
    transition: 0.05s;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${colorSchema.secondary};
  }
`;
