import React, { ReactNode } from 'react';

import { Button } from '../../components';

import { ListItem } from './ListItem';
import { ListEmpty } from './ListEmpty';

import type { ListItemComponent } from './ListItem';
import type { ListEmptyComponent } from './ListEmpty';

import classNames from '../../utils/classNames';

type ListComponent = React.FunctionComponent<ListProps> & { Item: ListItemComponent; Empty: ListEmptyComponent };

type ListButton = {
  text: string;
  click: () => void;
};
interface ListProps {
  button?: ListButton;
  classes?: string;
  children: ReactNode;
}

const List: ListComponent = ({ button, classes, children }) => {
  return (
    <>
      {button ? (
        <div className="mb-4">
          <Button onClick={button.click}>{button.text}</Button>
        </div>
      ) : null}
      <ul className={classNames('divide-y divide-gray-200', classes ? classes : '')}>{children}</ul>
    </>
  );
};

List.Item = ListItem;
List.Empty = ListEmpty;

export { List };
