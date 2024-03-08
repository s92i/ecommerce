import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);

  const handleAddQty = () => {
    if (qty >= 10) return;
    setQty((prev) => prev + 1);
  };

  const handleSubQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.imageUrl }} />
      <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>Price : {item?.price} $</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleSubQty}>
          <Text style={styles.btnQtyText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{qty}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  name: {
    fontSize: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnQty: {
    width: 30,
    backgroundColor: "lightgray",
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
  },
});
