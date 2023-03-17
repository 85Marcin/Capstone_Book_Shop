import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";
import { Book } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { addBasketItem } from "../redux/actions/basketActions";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const basketInfo = useSelector((state: any) => state.basket);
  const { basket } = basketInfo;

  const addBook = (id: number) => {
    if (basket.some((book: Book) => book._id === id)) {
      toast({
        description:
          "This title is already in the basket. Go to the basket to change the quantity.",
        status: "warning",
        isClosable: true,
      });
    } else {
      dispatch(addBasketItem(id, 1) as any);
      toast({
        description: "Book has been added to the basket",
        status: "success",
        isClosable: true,
      });
    }
  };
  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue("white", "gray.800")}
      minW="240px"
      h="450px"
      rounded="lg"
      position="relative"
    >
      <Image src={book.image} alt={book.title} />
      <Box flex="1" maxH="5" alignItems="baseline">
        {book.stock <= 0 && (
          <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
            Sold Out
          </Badge>
        )}
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactLink}
          to={`/book/${book._id}`}
          pt="2"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            textColor: "blue.200",
          }}
        >
          <Box fontSize="2xl" fontWeight="bold" as="h4" lineHeight="tight">
            {book.title}
          </Box>
        </Link>
      </Flex>
      <Flex justify="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.500"} fontSize="lg">
            £
          </Box>
          {book.price.toFixed(2)}
        </Box>
        <Button
          variant="ghost"
          isDisabled={book.stock <= 0}
          onClick={() => addBook(book._id)}
        >
          Add to basket
        </Button>
      </Flex>
    </Stack>
  );
};

export default BookCard;
