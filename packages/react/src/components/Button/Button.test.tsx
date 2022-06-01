import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render a button', () => {
    render(<Button label="Click me" />);

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
