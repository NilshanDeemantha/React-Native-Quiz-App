import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const SplashImage = require('../../assets/images/splash.jpg');

const Splash = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
        source={SplashImage}
        style={styles.backgroundImg}
      />
      <Text style={styles.instructionTitle}>Instructions</Text>
      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>Each Quiz has four options quiz</Text>
        <Text style={styles.instruction}>Progress wil be shown at top</Text>
        <Text style={styles.instruction}>Score would be shown at the end</Text>
      </View>
      <Pressable style={styles.startBtn} onPress={() => navigation.navigate('Questions')}>
        <Text style={styles.instruction}>Start a Quiz</Text>
      </Pressable>
		</View>
	);
};

export default Splash;

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
  instructionTitle: {
    textAlign: 'center',
    fontSize: 'x-large',
    marginBottom: 40,
  },
  instructionContainer:{
    backgroundColor: 'purple',
    padding: 10,
    height: 100,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  instruction: {
    color: 'white',
    fontSize: 'large',
  },
  startBtn: {
    backgroundColor: 'purple',
    marginTop: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  }
});