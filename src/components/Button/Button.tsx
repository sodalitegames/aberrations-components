import React from 'react';

import classNames from '../../utils/classNames';

export type ButtonTheme = 'dark' | 'alert' | 'standard' | 'text';
export type ButtonSize = 'small' | 'standard' | 'large';
export type ButtonType = 'rounded' | 'block' | 'inline';

export interface ButtonProps {
  onClick?: () => void;
  classes?: string;
  size?: ButtonSize;
  theme?: ButtonTheme;
  type?: ButtonType;
  disabled?: boolean;
  disabledMessage?: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, classes, size = 'standard', theme = 'standard', type = 'block', disabled, disabledMessage }) => {
  return (
    <>
      <button
        type="button"
        className={classNames(
          'font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
          type === 'rounded'
            ? 'inline-flex items-center leading-5 px-2.5 py-0.5 rounded-full'
            : type === 'inline'
            ? 'flex justify-center leading-5 px-4 py-2 rounded-md'
            : type === 'block'
            ? 'w-full flex justify-center items-center px-4 py-2 rounded-md'
            : '',
          theme === 'dark'
            ? 'shadow-sm text-white bg-dark hover:bg-dark-400 focus:ring-dark-200 disabled:bg-dark/70 disabled:text-gray-100'
            : theme === 'alert'
            ? 'shadow-sm text-white bg-red-900/80 hover:bg-red-800/80 focus:ring-red-900/90 disabled:bg-red-900/50 disabled:text-gray-100'
            : theme === 'text'
            ? 'text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-600 focus:ring-gray-500 disabled:bg-white disabled:text-gray-300'
            : 'border border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500 disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
          size === 'small' ? 'text-xs' : size === 'large' ? 'text-md' : 'text-sm',
          classes ? classes : ''
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      {disabled && disabledMessage ? <p className="text-sm italic text-gray-400">{disabledMessage}</p> : null}
    </>
  );
};
