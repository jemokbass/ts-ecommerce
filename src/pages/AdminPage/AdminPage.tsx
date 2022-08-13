import { FC, useState, FormEvent, MouseEvent, ChangeEvent, useEffect, useCallback } from "react";
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
import { LoadMore } from "../../components/LoadMore";
import { useScrollToEnd } from "../../hooks/useScrollToEnd";
import { CKEditor } from "ckeditor4-react";

export const AdminPage: FC = () => {
  const dispatch = useDispatch();
  const { data, queryDoc, isLastPage } = useTypedSelector(state => state.products);
  const [hideModal, setHideModal] = useState(true);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("mens");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
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
    setProductDescription("");
  };

  const closeModal = (e: MouseEvent<HTMLElement>) =>
    e.target === e.currentTarget ? setHideModal(true) : null;

  const handleLoadMore = useCallback(() => {
    dispatch(fetchProductsStart({ startAfterDoc: queryDoc, persistProducts: data }));
  }, [dispatch, queryDoc, data]);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  useScrollToEnd(handleLoadMore, isLastPage);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      addProductsStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDescription,
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
        {data.map(product => (
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
      {!isLastPage && <LoadMore className="admin-page__more" onLoadMore={handleLoadMore} />}
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
          <CKEditor
            style={{ margin: "0 0 20px" }}
            onChange={e => setProductDescription(e.editor.getData())}
          />
          <Button>Add product</Button>
        </form>
      </Modal>
    </section>
  );
};
