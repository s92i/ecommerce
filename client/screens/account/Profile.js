import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { UserData } from "../../data/UserData";
import Layout from "../../components/layout/Layout";
import InputBox from "../../components/form/InputBox";

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState(UserData.email);
  const [password, setPassword] = useState(UserData.password);
  const [name, setName] = useState(UserData.name);
  const [address, setAddress] = useState(UserData.address);
  const [city, setCity] = useState(UserData.city);
  const [phone, setPhone] = useState(UserData.mobile);
  const [avatar, setAvatar] = useState(UserData.avatar);

  const handleUpdate = () => {
    if (
      !email ||
      !password ||
      !name ||
      !address ||
      !city ||
      !phone ||
      !avatar
    ) {
      return alert("Please fill all the fields");
    }
    navigation.navigate("Account");
  };

  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: avatar }} />
            <Pressable>
              <Text>Update your avatar</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder="Enter your name"
            autoComplete="name"
          />
          <InputBox
            value={email}
            setValue={setEmail}
            placeholder="Enter your email"
            autoComplete="email"
          />
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          <InputBox
            value={address}
            setValue={setAddress}
            placeholder="Enter your address"
            autoComplete="address-line1"
          />
          <InputBox
            value={city}
            setValue={setCity}
            placeholder="Enter your city"
          />
          <InputBox
            value={phone}
            setValue={setPhone}
            placeholder="Enter your mobile n°"
            autoComplete="tel"
          />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
            <Text style={styles.btnUpdateText}>Update profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnUpdate: {
    backgroundColor: "#000",
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: "center",
    marginTop: 10,
  },
  btnUpdateText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
