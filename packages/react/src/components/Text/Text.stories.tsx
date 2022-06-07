import React from 'react';

import { Text } from './Text';

export default {
  title: 'Text',
  component: Text
};

const message = 'Decor UI is awesome!';

export const Default = () => <Text>{message}</Text>;

export const Uppercase = () => <Text casing="uppercase">{message}</Text>;
