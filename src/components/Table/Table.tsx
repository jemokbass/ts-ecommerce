import { ReactNode } from "react";
import { cn } from "../../utils/index";

interface Props {
  headers: string[];
  headerStyle: {};
  className?: string;
  children: ReactNode;
}

export const Table = ({ headers, children, headerStyle, className }: Props) => {
  return (
    <table className={cn("table", className)}>
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
