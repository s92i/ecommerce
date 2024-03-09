import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "../../components/layout/Layout";
import { OrderData } from "../../data/OrderData";
import OrderItem from "../../components/form/OrderItem";

const Orders = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Orders</Text>
        <ScrollView>
          {OrderData.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Orders;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
});
