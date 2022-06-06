import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default: ComponentStory<typeof Navbar> = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

Default.storyName = 'Example Name';

export const Secondary = Template.bind({});
