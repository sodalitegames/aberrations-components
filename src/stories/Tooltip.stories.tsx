import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '../components/Tooltip/Tooltip';
import { Button } from '../components/Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: (
    <Button classes="mt-96" type="rounded">
      Try me
    </Button>
  ),
  message: ['This is the first line of the tooltip message', 'This is the second line of the tooltip message'],
};
