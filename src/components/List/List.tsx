import React, { ReactNode } from 'react';

import { ListItem } from './ListItem';
import { Empty } from './Empty';

import type { ListItemComponent } from './ListItem';
import type { EmptyProps } from './Empty';

import classNames from '../../utils/classNames';
interface ListProps {
  length: number;
  /**
   * { heading: string; message: string; children: ReactNode;}
   *
   */
  empty?: EmptyProps;
  classes?: string;
  children: ReactNode;
}

const List: React.FC<ListProps> & { Item: ListItemComponent } = ({ length, empty, classes, children }) => {
  return (
    <ul className={classNames('divide-y divide-gray-200', classes ? classes : '')}>
      {!length && empty ? (
        <Empty heading={empty.heading} message={empty.message}>
          {empty.children}
        </Empty>
      ) : (
        children
      )}
    </ul>
  );
};

List.Item = ListItem;

export { List };
