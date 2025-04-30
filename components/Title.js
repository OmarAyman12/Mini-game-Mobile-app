import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet({
    title:{
        
    }
});
