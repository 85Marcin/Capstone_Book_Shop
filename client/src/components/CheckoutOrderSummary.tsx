import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Badge,
  Box,
  Link,
  Divider,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import { PhoneIcon, EmailIcon, ChatIcon } from "@chakra-ui/icons";
import { createOrder } from "../redux/actions/orderActions";
import CheckoutItem from "./CheckoutItem";
import { Book } from "../../../types";
import PayPalButton from "./PayPalButton";

const CheckoutOrderSummary = () => {
  const colorMode: string = mode("blue.600", "blue.400");
  const basketItems = useSelector((state: any) => state.basket);
  const { basket, subtotal } = basketItems;
  const user = useSelector((state: any) => state.user);
  const { userInfo } = user;
  const shippingInfo = useSelector((state: any) => state.order);
  const { error, shippingAddress } = shippingInfo;
  const standardShipping = Number(2.99).toFixed(2);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const onPaymentSuccess = () => {
    alert("order success");
  };
  const onPaymentError = () => {
    alert("order error");
  };
  return (
    <Stack spacing="8" rounded="xl" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>
      {basket.map((item: Book) => (
        <CheckoutItem key={item._id} basketItem={item} />
      ))}
      <Stack spacing="6" />
      <Flex justify="space-between">
        <Text fontWeight="md" color={colorMode}>
          Subtotal
        </Text>
        <Text fontWeight="md" color={colorMode}>
          {subtotal}
        </Text>
      </Flex>
      <Flex justify="space-between">
        <Text fontWeight="md" color={colorMode}>
          Shipping
        </Text>
        {subtotal <= 50 ? (
          standardShipping
        ) : (
          <Badge px="2" fontSize="0.8em" colorScheme="orange">
            Free
          </Badge>
        )}
      </Flex>
      <Flex justify="space-between">
        <Text fontSize="lg" fontWeight="semibold" color={colorMode}>
          Total
        </Text>
        <Text fontSize="xl" fontWeight="extrabold">
          £
          {subtotal <= 50
            ? Number(Number(subtotal) + Number(standardShipping)).toFixed(2)
            : subtotal}
        </Text>
      </Flex>
      <PayPalButton
        onPaymentSuccess={onPaymentSuccess as any}
        onPaymentError={onPaymentError}
        amount={
          subtotal <= 50
            ? Number(Number(subtotal) + Number(standardShipping)).toFixed(2)
            : subtotal
        }
      />
    </Stack>
  );
};

export default CheckoutOrderSummary;
