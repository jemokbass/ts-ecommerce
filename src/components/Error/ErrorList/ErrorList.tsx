import { FC } from 'react';

interface IErrorListProps {
  errors: string[];
}

const ErrorList: FC<IErrorListProps> = ({ errors }) => {
  return (
    <ul className="error-list">
      {errors.map(err => (
        <li className="error-list__item" key={err}>
          {err}
        </li>
      ))}
    </ul>
  );
};

export default ErrorList;