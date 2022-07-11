import { FC } from "react";
import { Button } from "../UI/Button";
import "./LoadMore.css";

interface Props {
  onLoadMore: () => void;
  className?: string;
}

export const LoadMore: FC<Props> = ({ onLoadMore, className }) => {
  return (
    <Button onClick={onLoadMore} className={`load-more${className ? ` ${className}` : ""}`}>
      Load More
    </Button>
  );
};
