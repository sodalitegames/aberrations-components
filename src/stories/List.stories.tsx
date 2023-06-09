import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '../components/List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => (
  <List {...args}>
    <List.Item heading="this is a heading">
      <p>item #1</p>
    </List.Item>
  </List>
);

export const Example = Template.bind({});

Example.args = {
  list: [],
  button: {
    text: 'click me',
    click: () => console.log('clicked'),
  },
  empty: {
    heading: 'empty heading',
    message: 'this is empty!',
    button: {
      text: '+ click me',
      click: () => console.log('clicked'),
    },
  },
};
