import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  it('should render a text', () => {
    render(<Text>Hello World</Text>);

    console.log(screen);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
