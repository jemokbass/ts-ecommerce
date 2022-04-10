import { FC } from "react";

interface Props {
  headers: string[];
  headerStyle: {};
  className?: string;
}

export const Table: FC<Props> = ({ headers, children, headerStyle, className }) => {
  return (
    <table className={`table${className ? ` ${className}` : ""}`}>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header} style={headerStyle}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
