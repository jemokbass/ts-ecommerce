import { ChangeEvent, FormEvent, useState, SetStateAction, Dispatch } from "react";
import { FormGroup } from "../UI/FormGroup";
import { Inner } from "../UI/Inner";
import { Input } from "../UI/Input";
import { Title } from "../UI/Title";
import { CountryDropdown } from "react-country-region-selector";
import { CardElement, useElements } from "@stripe/react-stripe-js";
import { Button } from "../UI/Button";
import { apiInstance } from "../../utils/index";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Inputs {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

const initialValue = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const PaymentDetails = () => {
  const elements = useElements();
  const [billingAddress, setBillingAddress] = useState<Inputs>({ ...initialValue });
  const [shippingAddress, setShippingAddress] = useState<Inputs>({ ...initialValue });
  const [recipientName, setRecipientName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleAddress = (e: ChangeEvent<HTMLInputElement>, action: Dispatch<SetStateAction<Inputs>>) => {
    const { name, value } = e.target;

    action(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postalCode ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postalCode ||
      !billingAddress.country ||
      !billingAddress.line2 ||
      !recipientName ||
      !nameOnCard
    ) {
      return;
    }

    apiInstance.post("/payments/create", { amount: "" });
  };

  return (
    <Inner className="payment-details">
      <form className="payment-details__form" onSubmit={onSubmit}>
        <FormGroup>
          <Title type="legend">Shipping address</Title>
          <Input
            label="Recipient Name"
            placeholder="Naruto Uzumaki"
            value={recipientName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setRecipientName(e.target.value)}
            name="recipientName"
            required
          />
          <Input
            label="Line 1"
            placeholder="Risonanakameguro Bldg 12"
            value={shippingAddress.line1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setShippingAddress)}
            name="line1"
            required
          />
          <Input
            label="Line 2"
            placeholder="Apartment 5"
            value={shippingAddress.line2}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setShippingAddress)}
            name="line2"
            required
          />
          <Input
            label="City"
            placeholder="Tokyo"
            value={shippingAddress.city}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setShippingAddress)}
            name="city"
            required
          />
          <Input
            label="Region"
            placeholder="Kantō"
            value={shippingAddress.state}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setShippingAddress)}
            name="state"
            required
          />
          <Input
            label="Postal Code"
            placeholder="100‑0000"
            value={shippingAddress.postalCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setShippingAddress)}
            name="postalCode"
            required
          />
          <CountryDropdown
            classes="payment-details__select"
            valueType="short"
            value={shippingAddress.country || ""}
            onChange={value => setShippingAddress(prevState => ({ ...prevState, country: value }))}
            name="country"
          />
        </FormGroup>
        <FormGroup>
          <Title type="legend">Billing address</Title>
          <Input
            label="Name on Card"
            placeholder="Naruto Uzumaki"
            value={nameOnCard}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNameOnCard(e.target.value)}
            name="nameOnCard"
            required
          />
          <Input
            label="Line 1"
            placeholder="Risonanakameguro Bldg 12"
            value={billingAddress.line1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setBillingAddress)}
            name="line1"
            required
          />
          <Input
            label="Line 2"
            placeholder="Apartment 5"
            value={billingAddress.line2}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setBillingAddress)}
            name="line2"
            required
          />
          <Input
            label="City"
            placeholder="Tokyo"
            value={billingAddress.city}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setBillingAddress)}
            name="city"
            required
          />
          <Input
            label="Region"
            placeholder="Kantō"
            value={billingAddress.state}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setBillingAddress)}
            name="state"
            required
          />
          <Input
            label="Postal Code"
            placeholder="100‑0000"
            value={billingAddress.postalCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleAddress(e, setBillingAddress)}
            name="postalCode"
            required
          />
          <CountryDropdown
            classes="payment-details__select"
            valueType="short"
            value={billingAddress.country || ""}
            onChange={value => setBillingAddress(prevState => ({ ...prevState, country: value }))}
            name="country"
          />
        </FormGroup>
        <FormGroup>
          <Title type="legend">Payments Details</Title>
          <CardElement
            options={{ iconStyle: "solid", style: { base: { fontSize: "16px" } }, hidePostalCode: true }}
          />
        </FormGroup>
        <Button type="submit">Pay Now</Button>
      </form>
    </Inner>
  );
};
