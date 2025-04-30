import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/primaryButton";

function GameOverScreen({ onStartNewGame }) {
  function handleReturn() {
    onStartNewGame();
  }

  return (
    <View style={styles.GameOverScreenCtn}>
      <Text>Game is Over!!</Text>
      <PrimaryButton onPress={handleReturn}>Restart</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  GameOverScreenCtn: {
    margin: 50,
  },
});
