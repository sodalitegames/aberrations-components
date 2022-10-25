import React from 'react';
import { render } from '@testing-library/react';

import { Button } from '../components/Button/Button';

it('renders the Button component', () => {
  expect(render(<Button>Hello</Button>)).toMatchSnapshot();
});
