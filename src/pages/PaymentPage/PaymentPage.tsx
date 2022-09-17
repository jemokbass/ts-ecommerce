import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentDetails } from "../../components/PaymentDetails";
import { publishableKey } from "../../stripe/config";

const stripePromise = loadStripe(publishableKey);

export const PaymentPage = () => {
  return (
    <section className="payment-page">
      <Elements stripe={stripePromise}>
        <PaymentDetails />
      </Elements>
    </section>
  );
};
