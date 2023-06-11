import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List, Button } from '../components';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => (
  <List {...args}>
    <List.Item
      heading="Item #1"
      actions={[
        { text: 'Edit', click: () => {} },
        { text: 'Delete', click: () => {} },
      ]}
    >
      <p>This is item #1 with default actions</p>
    </List.Item>
    <List.Item
      heading="Item #2"
      theme="panel"
      actions={[
        { text: 'Edit', click: () => {} },
        { text: 'Delete', click: () => {} },
      ]}
    >
      <p>This is item #2 with panel actions</p>
    </List.Item>
    <List.Item
      heading="Item #3"
      actions={[
        { text: 'Edit', click: () => {}, theme: 'dark' },
        { text: 'Delete', click: () => {}, theme: 'alert' },
      ]}
    >
      <p>This is item #3 with themed actions</p>
    </List.Item>
  </List>
);

export const Example = Template.bind({});

Example.args = {
  length: 2,
  empty: {
    heading: 'You do not have any <items>',
    message: 'Try creating one to get started.',
    children: <Button>Add New</Button>,
  },
};
