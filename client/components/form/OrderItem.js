import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>Order ID : {order._id}</Text>
        <Text>Date : {order.date}</Text>
      </View>
      <Text>Product name : {order.product.name}</Text>
      <Text>Price : {order.product.price} $</Text>
      <Text>Quantity : {order.product.qty}</Text>
      <Text>Amount : {order.amount} $</Text>
      <Text style={styles.status}>Order status : {order.status}</Text>
    </View>
  );
};

export default OrderItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "lightgray",
    padding: 5,
  },
});
