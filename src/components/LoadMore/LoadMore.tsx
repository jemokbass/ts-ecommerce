import { Button } from "../UI/Button";
import "./LoadMore.css";
import { cn } from "../../utils/index";

interface Props {
  onLoadMore: () => void;
  className?: string;
}

export const LoadMore = ({ onLoadMore, className }: Props) => {
  return (
    <Button onClick={onLoadMore} className={cn("load-more", className)}>
      Load More
    </Button>
  );
};
