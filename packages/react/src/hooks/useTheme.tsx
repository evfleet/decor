import React from 'react';

import { ThemeContext } from '../providers/ThemeProvider';

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
