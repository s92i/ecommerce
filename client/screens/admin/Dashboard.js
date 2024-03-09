import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/layout/Layout";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.main}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="edit" style={styles.icon} />
            <Text style={styles.btnText}>Manage products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="edit" style={styles.icon} />
            <Text style={styles.btnText}>Manage categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="user" style={styles.icon} />
            <Text style={styles.btnText}>Manage users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="list" style={styles.icon} />
            <Text style={styles.btnText}>Manage orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome name="info" style={styles.icon} />
            <Text style={styles.btnText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgray",
    height: "96%",
  },
  heading: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  btnContainer: {
    margin: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 20,
  },
  btnText: {
    fontSize: 18,
  },
});
