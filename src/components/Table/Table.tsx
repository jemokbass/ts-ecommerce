import { ReactNode } from "react";

interface Props {
  headers: string[];
  headerStyle: {};
  className?: string;
  children: ReactNode;
}

export const Table = ({ headers, children, headerStyle, className }: Props) => {
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
