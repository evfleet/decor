import { createGlobalStyle } from 'styled-components';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }
`;

export default Fonts;
