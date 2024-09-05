import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const FinishImage = require('../../assets/images/finish.jpg');

const Score = ({ navigation }) => {
  const route = useRoute();
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={FinishImage}
        style={styles.backgroundImg}
      />
      <Text style={styles.congratulations}>Congratulations!! Your scored {score} points</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Splash')}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </Pressable>
    </View>
  )
}

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  backgroundImg: {
    height: '50%',
    width: '100%',
    aspectRatio: 1,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 'medium',
  },
  congratulations: {
    fontSize: 'medium',
    marginTop: 20,
  },
});

