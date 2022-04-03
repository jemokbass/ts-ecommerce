import { FC } from 'react';

interface ITitleProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: FC<ITitleProps> = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return <h1 className="title title-xxl">{children}</h1>;
    case 'h2':
      return <h2 className="title title-xl">{children}</h2>;
    case 'h3':
      return <h3 className="title title-md">{children}</h3>;
    case 'h4':
      return <h4 className="title title-sm">{children}</h4>;
    case 'h5':
      return <h5 className="title title-xs">{children}</h5>;
    case 'h6':
      return <h6 className="title title-xxs">{children}</h6>;
    default:
      return null;
  }
};

export default Title;
