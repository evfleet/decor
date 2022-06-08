import React from 'react';

import { Text } from './Text';

export default {
  title: 'Text',
  component: Text
};

const message = 'Decor UI is awesome!';

export const Default = () => <Text>{message}</Text>;

export const Span = () => <Text as="span">{message}</Text>;

export const RightAligned = () => <Text align="right">{message}</Text>;

export const CenterAligned = () => <Text align="center">{message}</Text>;

export const Uppercase = () => <Text casing="uppercase">{message}</Text>;

export const Lowercase = () => <Text casing="lowercase">{message}</Text>;

export const Underlined = () => <Text decoration="underline">{message}</Text>;

export const LineThrough = () => <Text decoration="line-through">{message}</Text>;

export const ComplexDecoration = () => <Text decoration="overline dotted red">{message}</Text>;
