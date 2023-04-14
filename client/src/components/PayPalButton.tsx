import {
  PayPalScriptProvider,
  PayPalButtons,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import PAYPAL_CLIENT_ID from "../client_id";

interface PayPalButtonProps {
  onPaymentSuccess: PayPalButtonsComponentProps["onApprove"];
  onPaymentError: PayPalButtonsComponentProps["onError"];
  amount: string;
}

const PayPalButton = ({
  onPaymentSuccess,
  onPaymentError,
  amount,
}: PayPalButtonProps) => {
  return (
    <PayPalScriptProvider
      options={{ "client-id": PAYPAL_CLIENT_ID, currency: "GBP" }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: "GBP",
                },
              },
            ],
          });
        }}
        onApprove={onPaymentSuccess}
        onError={onPaymentError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
