import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { setError, shippingAddressAdd } from "../slices/order";

export const setShippingAddress = (data: any) => (dispatch: Dispatch) => {
  dispatch(shippingAddressAdd(data));
};
export const setShippingAddressError =
  (value: Error) => (dispatch: Dispatch) => {
    dispatch(setError(value));
  };

export const createOrder =
  (order: any) => async (dispatch: Dispatch, getState: any) => {
    const {
      order: { shippingAddress },
    } = getState();
    const preparedOrder = { ...order, shippingAddress };
    const {
      user: { userInfo },
    } = getState();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "Application/json",
        },
      };
      const { data } = await axios.post("api/orders", preparedOrder, config);
    } catch (error: any) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An unexpected error occured. Please try again later"
        )
      );
    }
  };
