import express, { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/Order.js";
import protectRoute from "../middleware/authMiddleware";

const orderRoutes = express.Router();
const createOrder = expressAsyncHandler(async (req: Request, res: Response) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    paymentDetails,
    shippingPrice,
    totalPrice,
    userInfo,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items.");
  } else {
    const order = new Order({
      orderItems,
      user: userInfo._id,
      username: userInfo.name,
      email: userInfo.email,
      shippingAddress,
      paymentMethod,
      paymentDetails,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

orderRoutes.route("/").post(protectRoute, createOrder);

export default orderRoutes;
