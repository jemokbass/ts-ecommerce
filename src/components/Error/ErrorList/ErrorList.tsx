import { FC } from "react";

interface Props {
  errors: string[];
}

export const ErrorList: FC<Props> = ({ errors }) => {
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
