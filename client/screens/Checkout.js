import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Checkout = ({ navigation }) => {
  const handleOnlinePayment = () => {
    navigation.navigate("Payment");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment options</Text>
      <Text style={styles.price}>Total amount : 101$</Text>
      <View style={styles.paymentCard}>
        <Text style={styles.paymentHeading}>Select your payment mode</Text>
        <TouchableOpacity style={styles.paymentBtn}>
          <Text style={styles.paymentBtnText}>Cash on delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentBtn}
          onPress={handleOnlinePayment}
        >
          <Text style={styles.paymentBtnText}>Online (credit/debit card)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeading: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#fff",
    textAlign: "center",
  },
});
