import React from 'react';
import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Heading', () => {
  it('should render the text', () => {
    render(<Heading>Hello World</Heading>);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render a h1 tag by default', () => {
    render(<Heading>Hello World</Heading>);

    expect(screen.getByText('Hello World')).toBeInstanceOf(HTMLHeadingElement);
  });

  it('should render a h2 tag when passed h2 in props', () => {
    render(<Heading as="h2">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toBeInstanceOf(HTMLHeadingElement);
  });

  it('should render text aligned to the right when passed right in props', () => {
    render(<Heading align="right">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-align: right');
  });

  it('should render text aligned to the center when passed center in props', () => {
    render(<Heading align="center">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-align: center');
  });

  it('should render text in uppercase when passed uppercase in props', () => {
    render(<Heading casing="uppercase">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-transform: uppercase');
  });

  it('should render text in lowercase when passed lowercase in props', () => {
    render(<Heading casing="lowercase">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-transform: lowercase');
  });

  it('should render text underlined when passed underline in props', () => {
    render(<Heading decoration="underline">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: underline');
  });

  it('should render text with line-through when passed line-through in props', () => {
    render(<Heading decoration="line-through">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: line-through');
  });

  it('should render text with a more complex text-decoration when passed one in props', () => {
    render(<Heading decoration="underline dotted red">Hello World</Heading>);

    expect(screen.getByText('Hello World')).toHaveStyle('text-decoration: underline dotted red');
  });
});
