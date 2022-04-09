import { FC, useState, FormEvent, MouseEvent, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { Modal } from "../../components/UI/Modal";
import { Select } from "../../components/UI/Select";
import { Title } from "../../components/UI/Title";
import {
  addProductsStart,
  fetchProductsStart,
  deleteProductsStart,
} from "../../store/actions/products.actions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Table } from "../../components/Table";

export const AdminPage: FC = () => {
  const dispatch = useDispatch();
  const { products } = useTypedSelector(state => state.products);
  const [hideModal, setHideModal] = useState(true);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("mens");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const options = [
    { name: "Mens", value: "mens" },
    { name: "Girls", value: "girls" },
  ];

  const resetForm = () => {
    setHideModal(true);
    setProductName("");
    setProductCategory("mens");
    setProductThumbnail("");
    setProductPrice(0);
  };

  const closeModal = (e: MouseEvent<HTMLElement>) =>
    e.target === e.currentTarget ? setHideModal(true) : null;

  useEffect(() => {
    dispatch(fetchProductsStart());
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(
      addProductsStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
      })
    );
    resetForm();
  };

  return (
    <section className="admin-page">
      <Button onClick={() => setHideModal(false)}>Add new product</Button>
      <h1 className="admin-page__title">Manage products</h1>
      <Table
        headers={["Image", "Name", "Price", "Action"]}
        headerStyle={{ width: "25%" }}
        className="admin-page__table"
      >
        {products.map(product => (
          <tr key={product.documentID}>
            <td width="25%">
              <img src={product.productThumbnail} alt="product" />
            </td>
            <td width="25%">{product.productName}</td>
            <td width="25%">{product.productPrice}</td>
            <td width="25%">
              <Button onClick={() => dispatch(deleteProductsStart(product.documentID))}>Delete</Button>
            </td>
          </tr>
        ))}
      </Table>
      <Modal isOpen={!hideModal} setIsClose={closeModal}>
        <Title type="h3">Add new product</Title>
        <form onSubmit={handleSubmit}>
          <Select
            label="Category"
            name="category"
            options={options}
            value={productCategory}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setProductCategory(e.target.value)}
          />
          <Input
            name="name"
            label="Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
            value={productName}
          />
          <Input
            name="thumbnail"
            label="Main image URL"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductThumbnail(e.target.value)}
            value={productThumbnail}
          />
          <Input
            name="price"
            label="Main image URL"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setProductPrice(Number(e.target.value))}
            value={productPrice.toString()}
            step={0.01}
          />
          <Button>Add product</Button>
        </form>
      </Modal>
    </section>
  );
};
