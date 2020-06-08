import React, { FC, ReactNode } from 'react';
import './content.scss';

/* eslint-disable-next-line */
export interface ContentProps {
  children?: ReactNode
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default Content;
