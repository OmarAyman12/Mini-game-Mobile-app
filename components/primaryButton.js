import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children , onPress}) {
  // function handlePress() {
  //   console.log("Pressed");
  // }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={() => styles.primButton}
        android_ripple={{ color: "#624420" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 7,
    margin: 4,
    overflow: "hidden",
  },
  primButton: {
    padding: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 1,
    backgroundColor: "purple",
    elevation: 4,
    paddingInline:10,
    borderRadius: 7,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
