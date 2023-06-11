import React, { ReactNode } from 'react';

export interface EmptyProps {
  heading: string;
  message: string;
  children?: ReactNode;
}

export const Empty: React.FC<EmptyProps> = ({ heading, message, children }) => {
  return (
    <li className="relative block w-full px-3 py-5 text-center border-2 border-gray-300 border-dashed rounded-lg">
      <h3 className="text-sm font-medium text-gray-900">{heading}</h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
      {children && <div className="mt-6">{children}</div>}
    </li>
  );
};
