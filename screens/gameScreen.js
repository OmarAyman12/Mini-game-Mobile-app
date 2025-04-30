import React, { useEffect, useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/primaryButton";
import AntDesign from "@expo/vector-icons/AntDesign";
function generateRandomBetween(min, max, exclude) {
  let rndNum;
  do {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  } while (rndNum === exclude);
  return rndNum;
}

function GameScreen({ pickedNumber, onGameOver }) {
  const [guessedNumber, setGuessedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState([]);

  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);

  useEffect(() => {
    const initialGuess = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
      pickedNumber
    );
    setGuessedNumber(initialGuess);
  }, []);

  useEffect(() => {
    if (guessedNumber === pickedNumber) {
      
      onGameOver(guessRounds.length);

    }
  }, [guessedNumber, pickedNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && guessedNumber < pickedNumber) ||
      (direction === "higher" && guessedNumber > pickedNumber)
    ) {
      Alert.alert("Don't lie!!", "You know that's incorrect.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary.current = guessedNumber;
    } else {
      minBoundary.current = guessedNumber + 1;
    }

    const newGuess = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
      guessedNumber
    );
    setGuessedNumber(newGuess);
    setGuessRounds((prevGuessRounds) => [newGuess, ...prevGuessRounds]);
  }

  return (
    <View style={styles.gameScreen}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Opponent's Guess</Text>
      </View>
      <View style={styles.inputNum}>
        <Text style={styles.titleText}>{guessedNumber}</Text>
      </View>
      <View style={styles.HlContainer}>
        <View>
          <Text style={styles.hlText}>Higher or Lower?</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => 
            <Text>{itemData.item}</Text>
          }
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flexDirection: "column",
    marginTop: 150,
    marginHorizontal: 10,
    alignItems: "center",
    flex: 1,
  },
  title: {
    borderWidth: 1,
    padding: 20,
    marginBottom: 10,
  },
  titleText: {
    color: "white",
    fontSize: 20,
  },
  inputNum: {
    borderWidth: 1,
    padding: 20,
    marginBottom: 40,
    width: "80%",
    alignItems: "center",
  },
  HlContainer: {
    flexDirection: "column",
    backgroundColor: "#4e0329",
    borderRadius: 6,
    alignItems: "center",
    padding: 20,
    width: "80%",
  },
  button: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
  },
  hlText: {
    color: "yellow",
    fontSize: 20,
    margin: 5,
  },
  hlBtn: {
    fontSize: 10,
  },
});
