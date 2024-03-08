import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "Home" && styles.active]}
          name="home"
        />
        <Text style={[styles.iconText, route.name === "Home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Notifications")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "Notifications" && styles.active]}
          name="bell"
        />
        <Text
          style={[
            styles.iconText,
            route.name === "Notifications" && styles.active,
          ]}
        >
          Notifications
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Account")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "Account" && styles.active]}
          name="user"
        />
        <Text
          style={[styles.iconText, route.name === "Account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Cart")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "Cart" && styles.active]}
          name="shopping-cart"
        />
        <Text style={[styles.iconText, route.name === "Cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("Logout")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "Logout" && styles.active]}
          name="sign-out"
        />
        <Text
          style={[styles.iconText, route.name === "Logout" && styles.active]}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000",
  },
  iconText: {
    fontSize: 10,
    color: "#000",
  },
  active: {
    color: "blue",
  },
});
