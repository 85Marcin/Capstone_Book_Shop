import { combineReducers, configureStore } from "@reduxjs/toolkit";
import books from "./slices/books";
import basket from "./slices/basket";
import user from "./slices/user";
import order from "./slices/order";

const reducer = combineReducers({
  books,
  basket,
  user,
  order,
});

export type RootState = ReturnType<typeof reducer>;

export default configureStore({
  reducer,
});
