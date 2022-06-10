import React from 'react';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading
};

const message = 'Decor UI is awesome!';

export const Default = () => <Heading>{message}</Heading>;

export const HeadingTwo = () => <Heading as="h2">{message}</Heading>;

export const RightAligned = () => <Heading align="right">{message}</Heading>;

export const CenterAligned = () => <Heading align="center">{message}</Heading>;

export const Uppercase = () => <Heading casing="uppercase">{message}</Heading>;

export const Lowercase = () => <Heading casing="lowercase">{message}</Heading>;

export const Underlined = () => <Heading decoration="underline">{message}</Heading>;

export const LineThrough = () => <Heading decoration="line-through">{message}</Heading>;

export const ComplexDecoration = () => (
  <Heading decoration="underline dotted red">{message}</Heading>
);
