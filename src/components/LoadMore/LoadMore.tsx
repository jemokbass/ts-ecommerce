import { Button } from "../UI/Button";
import "./LoadMore.css";

interface Props {
  onLoadMore: () => void;
  className?: string;
}

export const LoadMore = ({ onLoadMore, className }: Props) => {
  return (
    <Button onClick={onLoadMore} className={`load-more${className ? ` ${className}` : ""}`}>
      Load More
    </Button>
  );
};
