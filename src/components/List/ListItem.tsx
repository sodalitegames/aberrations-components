import React, { ReactNode } from 'react';

import { Button } from '../Button';

import type { ButtonTheme } from '../Button/Button';

export type ListItemComponent = React.FunctionComponent<ListItemProps>;

export type ActionButton = {
  text: string;
  click: () => void;
  theme?: ButtonTheme;
  disabled?: boolean;
};

interface ListItemProps {
  heading: string;
  theme?: 'panel' | 'standard';
  actions?: ActionButton[];
  children: ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ heading, actions, theme = 'standard', children }) => {
  return (
    <li className="w-full py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-800">{heading}</h3>
          {children}
        </div>
        {theme === 'standard' && actions && (
          <div className="space-x-4">
            {actions.map((button, index) => (
              <Button key={`${button.text}#${index}`} type="rounded" theme={button.theme ?? 'standard'} onClick={button.click} disabled={button.disabled}>
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
      {theme === 'panel' && actions && (
        <div className="flex justify-end space-x-1">
          {actions.map((button, index) => (
            <Button key={`${button.text}#${index}`} size="small" type="inline" theme={button.theme ?? 'text'} onClick={button.click} disabled={button.disabled}>
              {button.text}
            </Button>
          ))}
        </div>
      )}
    </li>
  );
};
