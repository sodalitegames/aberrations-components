import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '../components';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => (
  <List {...args}>
    <List.Empty heading="this is an empty heading" message="this is an empty message">
      <p>Ermpty</p>
    </List.Empty>
    <List.Item heading="this is a heading">
      <p>item #1</p>
    </List.Item>
  </List>
);

export const Example = Template.bind({});

Example.args = {};
