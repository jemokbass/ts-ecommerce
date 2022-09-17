interface Props {
  errors: string[];
}

export const ErrorList = ({ errors }: Props) => {
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
