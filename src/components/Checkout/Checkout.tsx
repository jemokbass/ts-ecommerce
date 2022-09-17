import { Title } from "../UI/Title";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Table } from "../Table";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { addToCart, removeCartItem, reduceCartItem } from "../../store/actions/cart.actions";
import { ReactComponent as IconArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as IconArrowRight } from "../../assets/icons/arrow-right.svg";
import { IProductData } from "../../utils/types/products.types";
import { toast } from "react-toastify";

export const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useTypedSelector(state => state.cart);

  const totalPrice = (cartItems: IProductData[]) =>
    cartItems.reduce(
      (quantity, item) =>
        item.quantity && item.productPrice ? quantity + item.quantity * item.productPrice : quantity,
      0
    );

  return (
    <div className="checkout">
      <Title className="checkout__title" type="h1">
        Checkout
      </Title>
      {cartItems.length ? (
        <>
          <Table
            className="checkout__table"
            headers={["Product", "Name", "Count", "Price", "Remove"]}
            headerStyle={{ width: "20%" }}
          >
            {cartItems.map(item => (
              <tr key={item.documentID}>
                <td width="20%">
                  <img src={item.productThumbnail} alt="product" />
                </td>
                <td width="20%">{item.productName}</td>
                <td width="20%">
                  <div className="checkout__table-count">
                    <button
                      className="checkout__table-arrow"
                      type="button"
                      onClick={() => {
                        try {
                          dispatch(reduceCartItem(item));
                          toast(
                            `${item.productName} was decrease! ${item.quantity && `(${item.quantity - 1})`}`
                          );
                        } catch (error) {}
                      }}
                    >
                      <IconArrowLeft />
                    </button>
                    {item.quantity}
                    <button
                      className="checkout__table-arrow"
                      type="button"
                      onClick={() => {
                        try {
                          dispatch(addToCart(item));
                          toast(
                            `${item.productName} was increase! ${item.quantity && `(${item.quantity + 1})`}`
                          );
                        } catch (error) {}
                      }}
                    >
                      <IconArrowRight />
                    </button>
                  </div>
                </td>
                <td width="20%">{item.productPrice}</td>
                <td width="20%">
                  <Button
                    className="checkout__table-remove"
                    onClick={() => {
                      try {
                        dispatch(removeCartItem(item));
                        toast(`${item.productName} was removed!`);
                      } catch (error) {}
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td width="20%"></td>
              <td width="20%"></td>
              <td width="20%"></td>
              <td width="20%">Total:</td>
              <td width="20%">${totalPrice(cartItems)}</td>
            </tr>
          </Table>
          <div className="checkout__row">
            <Button isLink to="/search">
              Continue Shopping
            </Button>
            <Button>Checkout</Button>
          </div>
        </>
      ) : (
        <p className="checkout__text">You have no items in cart!</p>
      )}
    </div>
  );
};
