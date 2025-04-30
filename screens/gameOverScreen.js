import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/Title";

function GameOverScreen({ onStartNewGame, numOfGuesses, pickedNumber }) {
  function handleReturn() {
    onStartNewGame();
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
        <Text>Your phone needed <Text>{numOfGuesses}</Text> rounds to guess the number <Text>{pickedNumber}</Text></Text>
      <PrimaryButton onPress={handleReturn}>Restart</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
 
    alignItems:'center',
    margin:70,
    justifyContent:'center',
   
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
    
  },
  image:{
    width:'100%',
    height:'100%',
  }
});
