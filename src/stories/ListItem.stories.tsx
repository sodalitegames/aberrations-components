import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List, ListItem } from '../components';

export default {
  title: 'Components/List/List.Item',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = args => (
  <List length={1}>
    <ListItem {...args}>
      <p>This is item #1</p>
    </ListItem>
  </List>
);

export const Example = Template.bind({});

Example.args = {
  heading: 'Item #1',
  actions: [
    { text: 'Edit', click: () => {} },
    { text: 'Delete', click: () => {} },
  ],
};
