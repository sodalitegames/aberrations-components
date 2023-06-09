import EmptyState from './EmptyState';

import { Button } from '../Button';
import { ListItem } from './ListItem';
import type { ListItemComponent } from './ListItem';
import classNames from '../../utils/classNames';
import { ReactNode } from 'react';

type ListComponent = React.FunctionComponent<Props> & { Item: ListItemComponent };

type LCButton = {
  text: string;
  click: () => void;
};

type Empty = {
  heading: string;
  message: string;
  button: LCButton;
};

interface Props {
  list: any[];
  button?: LCButton;
  empty?: Empty;
  classes?: string;
  children: ReactNode;
}

const List: ListComponent = ({ list, button, empty, classes, children }) => {
  if (empty && !list.length) {
    return <EmptyState heading={empty.heading} message={empty.message} button={empty.button} />;
  }

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

export { List };
