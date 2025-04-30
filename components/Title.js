import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Title({ children ,style}) {
  return (
    <View>
      <Text style={[styles.title , style]}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
