import { FC } from "react";

interface ITableProps {
  headers: string[];
  headerStyle: {};
  className?: string;
}

const Table: FC<ITableProps> = ({ headers, children, headerStyle, className }) => {
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

export default Table;
