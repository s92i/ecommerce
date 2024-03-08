import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CartData } from "../data/CartData";
import PriceTable from "../components/cart/PriceTable";
import Layout from "../components/layout/Layout";
import CartItem from "../components/cart/CartItem";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData);

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} ${
              cartItems?.length === 1 ? "item" : "items"
            } left in your cart`
          : "Your cart is empty"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title="Price" price={999} />
            <PriceTable title="Tax" price={1} />
            <PriceTable title="Shipping" price={20} />
            <View style={styles.total}>
              <PriceTable title="Total" price={1020} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.btnCheckoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

export default Cart;
const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  total: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
