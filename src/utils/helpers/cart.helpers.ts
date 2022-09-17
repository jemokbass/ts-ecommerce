import { CartItem } from "../types/cart.types";

export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}: {
  prevCartItems: CartItem[];
  nextCartItem: CartItem;
}) => prevCartItems.find(cartItem => cartItem.documentID === nextCartItem.documentID);

export const handleAddToCart = ({
  prevCartItems,
  nextCartItem,
}: {
  prevCartItems: CartItem[];
  nextCartItem: CartItem;
}) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map(cartItem =>
      cartItem.documentID === nextCartItem.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + quantityIncrement : quantityIncrement,
          }
        : cartItem
    );
  }

  return [...prevCartItems, { ...nextCartItem, quantity: quantityIncrement }];
};

export const cartItemsCount = (data: CartItem[]) =>
  data.reduce((quantity, cartItem) => (cartItem.quantity ? quantity + cartItem.quantity : quantity), 0);

export const handleRemoveCartItem = ({
  prevCartItems,
  nextCartItem,
}: {
  prevCartItems: CartItem[];
  nextCartItem: CartItem;
}) => {
  return prevCartItems.filter(item => item.documentID !== nextCartItem.documentID);
};

export const handleReduceCartItem = ({
  prevCartItems,
  reduceCartItem,
}: {
  prevCartItems: CartItem[];
  reduceCartItem: CartItem;
}) => {
  const existItem = prevCartItems.find(item => item.documentID === reduceCartItem.documentID);

  if (existItem?.quantity === 1) {
    return prevCartItems.filter(item => item.documentID !== existItem.documentID);
  }

  return prevCartItems.map(item =>
    item.documentID === existItem?.documentID
      ? { ...item, ...(item.quantity && { quantity: item.quantity - 1 }) }
      : item
  );
};
