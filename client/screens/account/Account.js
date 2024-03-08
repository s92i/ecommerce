import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/layout/Layout";
import { UserData } from "../../data/UserData";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Account = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: UserData.avatar }} style={styles.image} />
        <View style={styles.profileContainer}>
          <Text style={styles.name}>
            Hi <Text style={styles.nameUser}>{UserData.name}</Text> 👋
          </Text>
          <Text>Email: {UserData.email}</Text>
          <Text>Mobile: {UserData.mobile}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account settings</Text>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.btnText} name="edit" />
            <Text style={styles.btnText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.btnText} name="bars" />
            <Text style={styles.btnText}>My orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.btnText} name="bell" />
            <Text style={styles.btnText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <FontAwesome style={styles.btnText} name="dashboard" />
            <Text style={styles.btnText}>Admin panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Account;
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  nameUser: {
    color: "green",
  },
  btnContainer: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 15,
    marginRight: 10,
  },
});
