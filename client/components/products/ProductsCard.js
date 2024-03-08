import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductsCard = ({ product }) => {
  const navigation = useNavigation();

  const handleMoreBtn = (id) => {
    navigation.navigate("ProductDetails", { _id: id });
  };

  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: product?.imageUrl }} />
        <Text style={styles.cardTitle}>{product?.name}</Text>
        <Text style={styles.cardDescription}>
          {product?.description.substring(0, 30)} ...more
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreBtn(product._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}>
            <Text style={styles.btnText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductsCard;
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});
