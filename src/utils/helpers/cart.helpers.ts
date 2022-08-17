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
