import { FC } from 'react';

const Inner: FC = ({ children }) => {
  return <div className="inner">{children}</div>;
};

export default Inner;
