import { FC } from "react";
import { useDispatch } from "react-redux";

export const Products: FC = () => {
  const dispatch = useDispatch();
  return <div className="products"></div>;
};
