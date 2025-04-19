import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/startScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  let screen = <StartScreen onPickNumber={startGameHandler} />;
  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.3,
  },
});
