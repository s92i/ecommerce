import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      total,
    } = req.body;
    await orderModel.create({
      user: req.user._id,
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      total,
    });
    for (let i = 0; i < orderItems.length; i++) {
      const product = await productModel.findById(orderItems[i].product);
      product.stock -= orderItems[i].quantity;
      await product.save();
    }
    res.status(201).send({
      success: true,
      message: "Order created successfully",
    });
  } catch (error) {
    console.log("Error in creating order", error);
    res.status(500).send({
      success: false,
      message: "Error in creating order",
      error,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ user: req.user._id });
    if (!orders) {
      return res.status(404).send({
        success: false,
        message: "No orders found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Orders data",
      totalOrders: orders.length,
      orders,
    });
  } catch (error) {
    console.log("Error fetching orders", error);
    res.status(500).send({
      success: false,
      message: "Error fetching orders",
      error,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "No order found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Order data",
      order,
    });
  } catch (error) {
    console.log("Error fetching order id", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid order id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error fetching order id",
      error,
    });
  }
};
