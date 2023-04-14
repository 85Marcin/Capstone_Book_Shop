import {
  Stack,
  Flex,
  Select,
  useColorModeValue as mode,
  Image,
  Box,
  Text,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Book } from "../../../types";
import { addBasketItem } from "../redux/actions/basketActions";
interface BasketItemProps {
  basketItem: Book;
}

const CheckoutItem = ({ basketItem }: BasketItemProps) => {
  const { title, image, price, stock, qty, _id } = basketItem;
  const dispatch = useDispatch();
  return (
    <>
      <Flex>
        <Image
          w="120px"
          h="180px"
          fit="cover"
          src={image}
          alt={title}
          draggable="false"
          loading="lazy"
        />
        <Stack spacing="4">
          <Flex direction="column" align="stretch" flex="1" mx="2">
            <Text noOfLines={Number("2")} maxW="150px">
              {title}
            </Text>
            <Spacer />
            <Select
              maxW="64px"
              focusBorderColor={mode("blue.500", "blue.200")}
              value={qty}
              onChange={(e) => {
                dispatch(addBasketItem(_id, parseInt(e.target.value)) as any);
              }}
            >
              {[...Array(stock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Select>
          </Flex>
          <Box>
            <Text fontWeight="bold">£{price}</Text>
          </Box>
        </Stack>
      </Flex>
      <Divider bg={mode("blue.400", "blue.800")} />
    </>
  );
};

export default CheckoutItem;
