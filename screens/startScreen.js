import React, { useState } from "react";
import {
  Button,
  Pressable,
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import PrimaryButton from "../components/primaryButton";

function StartScreen({onPickNumber}) {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(enteredNum) {
    setEnteredValue(enteredNum);
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 1) {
      Alert.alert(
        "Invalid Number!",
        "Please Enter a Number Between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  function handleReset() {
    setEnteredValue("");
  }

  return (
    <View style={styles.startScreen}>
      <View style={styles.title}>
        <Text style={styles.textColor}>Guess My Number</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textColor}>Enter a Number</Text>
        <View style={styles.textInput}>
          <TextInput
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonFlex}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonFlex}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  startScreen: {
    marginTop: 100,
    marginHorizontal: 30,
  },
  title: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginHorizontal: 70,
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    width: "30%",

    alignItems: "center",
  },

  inputContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4e0329",
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 5,
  },
  buttonFlex: {
    flex: 1,
  },
  textColor: {
    color: "white",
  },
});
