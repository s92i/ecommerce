import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../../components/layout/Layout";

const Notifications = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>You don't have any notification yet</Text>
      </View>
    </Layout>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
