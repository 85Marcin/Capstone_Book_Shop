import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface OrderState {
  loading: boolean;
  error: null | Error;
  shippingAddress: string | null;
  order: string | null;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  shippingAddress: null,
  order: null,
};
const orderSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.loading = false;
    },
    shippingAddressAdd: (state, action: PayloadAction<string>) => {
      state.shippingAddress = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setError, shippingAddressAdd } = orderSlice.actions;
export default orderSlice.reducer;
export const userSelector = (state: RootState): OrderState => state.order;
