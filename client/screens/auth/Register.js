import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/form/InputBox";

const Register = ({ navigation }) => {
  const loginImg =
    "https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !phone) {
      return alert("Fill all fields");
    }
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImg }} style={styles.image} />
      <InputBox placeholder="Enter your name" value={name} setValue={setName} />
      <InputBox
        placeholder="Enter your email"
        autoComplete="email"
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder="Enter your address"
        value={address}
        setValue={setAddress}
      />
      <InputBox placeholder="Enter your city" value={city} setValue={setCity} />
      <InputBox
        placeholder="Enter your mobile n°"
        value={phone}
        setValue={setPhone}
        autoComplete="tel"
      />
      <InputBox
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        setValue={setPassword}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already a member ?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Login here
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 50,
  },
  loginBtn: {
    backgroundColor: "#000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "blue",
  },
});
