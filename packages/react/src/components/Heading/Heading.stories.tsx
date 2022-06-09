import React from 'react';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading
};

const message = 'Decor UI is awesome!';

export const Default = () => <Heading>{message}</Heading>;
