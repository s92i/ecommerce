import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../data/ProductsData";
import Layout from "../components/layout/Layout";

const ProductDetails = ({ route }) => {
  const { params } = route;

  const [productDetails, setProductDetails] = useState({});
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const getProduct = ProductsData.find((product) => {
      return product?._id === params?._id;
    });
    setProductDetails(getProduct);
  }, [params?._id]);

  const handleAddQty = () => {
    if (qty >= 10) return;
    setQty((prev) => prev + 1);
  };

  const handleSubQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <Layout>
      <Image source={{ uri: productDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{productDetails?.name}</Text>
        <Text style={styles.title}>Price : {productDetails?.price} $</Text>
        <Text style={styles.desc}>{productDetails?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            disabled={productDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {productDetails?.quantity > 0 ? "Add to cart" : "Out of stock"}
            </Text>
          </TouchableOpacity>
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
      </View>
    </Layout>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
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
