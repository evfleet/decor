import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  it('should render the text', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render a p tag by default', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText('Hello World')).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should render a span tag when passed span in props', () => {
    render(<Text as="span">Hello World</Text>);

    expect(screen.getByText('Hello World')).toBeInstanceOf(HTMLSpanElement);
  });

  it('should render text aligned to the right when passed right in props', () => {
    render(<Text align="right">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-align: right');
  });

  it('should render text aligned to the center when passed center in props', () => {
    render(<Text align="center">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-align: center');
  });

  it('should render text in uppercase when passed uppercase in props', () => {
    render(<Text casing="uppercase">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-transform: uppercase');
  });

  it('should render text in lowercase when passed lowercase in props', () => {
    render(<Text casing="lowercase">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-transform: lowercase');
  });

  it('should render text underlined when passed underline in props', () => {
    render(<Text decoration="underline">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: underline');
  });

  it('should render text with line-through when passed line-through in props', () => {
    render(<Text decoration="line-through">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: line-through');
  });

  it('should render text with a more complex text-decoration when passed one in props', () => {
    render(<Text decoration="overline dotted red">Hello World</Text>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: overline dotted red');
  });
});
