import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import * as Progress from 'react-native-progress';
import reactQuestions from '../../config/questions';

const Questions = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const progress = useMemo(() => (currentQuestionIndex + 1)/reactQuestions.length , [currentQuestionIndex]);

  const handelNext = () => {
    if (!selectedAnswer) {
      setDisplayError(true);
      return;
    }
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate('Score', { score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  }
  
  const handelSelectAnswer = (answer) => {
    setDisplayError(false);
    setSelectedAnswer(answer);
    const isAnswerCorrect = answer === reactQuestions[currentQuestionIndex].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore((score) => score + 10);
    }
  };
	return (
		<View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          progress={progress}
          width={null}
          height={20}
          color={'rgb(128,0,128)'}
        />
      </View>
      <Text style={styles.question}>
        {`${currentQuestionIndex + 1}. ${reactQuestions[currentQuestionIndex].question}`}
      </Text>
      {reactQuestions[currentQuestionIndex].answers.map((answer, index) => (
        <Pressable
          style={[styles.answerContainer, selectedAnswer === answer
            ? (isCorrect ? styles.correctAnswer : styles.wrongAnswer) : styles.notSelectedAnswer
          ]}
          onPress={() => handelSelectAnswer(answer)}
          disabled={!!selectedAnswer}
          key={index}
        >
          <Text style={styles.answer}>{answer}</Text>
        </Pressable>
      ))}
      <Text style={styles.error}>{displayError && 'Please select an answer'}</Text>
      <Pressable
        style={styles.button}
        onPress={handelNext}
      >
        <Text style={styles.buttonText}>{currentQuestionIndex === reactQuestions.length - 1 ? 'Submit' : 'Next'}</Text>
      </Pressable>
		</View>
	);
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  question: {
    fontSize: 'x-large',
    marginBottom: 20,
  },
  progressBarContainer: {
    flex: 1,
    marginBottom: 10,
  },
  answerContainer: {
    padding: 10,
    borderColor: 'purple',
    borderStyle: 'solid',
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 10,
  },
  answer: {
    fontSize: 'large',
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 'large',
  },
  correctAnswer: {
    borderColor: 'green',
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
  },
  wrongAnswer: {
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  notSelectedAnswer: {
    borderColor: 'purple',
  },
  error: {
    color: 'red',
    fontSize: 'medium',
    textAlign: 'center',
  }
});