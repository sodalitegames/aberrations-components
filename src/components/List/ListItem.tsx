import { Button } from '../Button';

export type ListItemComponent = React.FunctionComponent<ListItemProps>;

interface ButtonPanelProps {
  editable?: boolean;
  deletable?: boolean;
  editText?: string;
  deleteText?: string;
}

export const ButtonPanel: React.FC<ButtonPanelProps> = ({ editable, deletable, editText, deleteText }) => {
  return (
    <div className="flex justify-end mt-2 space-x-1">
      {editable ? (
        <button
          type="button"
          className="inline-flex items-center px-1.5 py-1.5 text-xs font-medium rounded text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {}}
        >
          {editText || 'Edit'}
        </button>
      ) : null}
      {deletable ? (
        <button
          type="button"
          className="inline-flex items-center px-1.5 py-1.5 text-xs font-medium rounded text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {}}
        >
          {deleteText || 'Delete'}
        </button>
      ) : null}
    </div>
  );
};

export type ListItemAction = {
  text: string;
  dark?: boolean;
  click: () => void;
  disabled?: boolean;
};

interface ListItemProps extends ButtonPanelProps {
  heading: string;
  noButtonPanel?: boolean;
  view?: boolean;
  actions?: ListItemAction[];
  children: any;
}

export const ListItem: React.FC<ListItemProps> = ({ heading, editable, deletable, editText, deleteText, actions, view, noButtonPanel, children }) => {
  if (view) {
    return (
      <li className="w-full py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-800">{heading}</h3>
            {children}
          </div>

          <div>
            <Button type="rounded" onClick={() => {}}>
              View
            </Button>
          </div>
        </div>
      </li>
    );
  }

  if (actions) {
    return (
      <li className="w-full py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-800">{heading}</h3>
            {children}
          </div>
          {actions ? (
            <div className="space-x-4">
              {actions.map((button, index) => (
                <Button key={index} type="rounded" theme={button.dark ? 'dark' : 'standard'} onClick={button.click} disabled={button.disabled}>
                  {button.text}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </li>
    );
  }

  return (
    <li className="w-full py-3">
      <h3 className="text-sm font-semibold text-gray-800">{heading}</h3>
      <div>{children}</div>
      {!noButtonPanel ? <ButtonPanel editable={editable} deletable={deletable} editText={editText} deleteText={deleteText} /> : null}
    </li>
  );
};
