import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({
  autoComplete,
  placeholder,
  secureTextEntry,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoComplete={autoComplete}
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default InputBox;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    height: 40,
    paddingLeft: 10,
    color: "#000",
    borderWidth: 1,
    borderColor: "gray",
  },
});
