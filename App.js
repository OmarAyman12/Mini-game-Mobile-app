
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/startScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver]= useState(true);
  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
   function gameOverHandler() {
     setGameIsOver(true);
   }
    function startNewGameHandler() {
      setUserNumber(null);
      setGameIsOver(true);
    }

  let screen = <StartScreen onPickNumber={startGameHandler} />;

 if (userNumber && !gameIsOver) {
   screen = (
     <GameScreen pickedNumber={userNumber} onGameOver={gameOverHandler} />
   );
 }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} />;

  }
 


 

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.rootScreen}> {screen}</SafeAreaView>
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
