import { useState } from 'react';

import * as Styled from './styles';
import { questionsAndAnswers } from '../../constants/questions-and-answers';
import { TQuizQuestionAnswer } from '../../interfaces/quesans';
import { arrayShuffle } from '../../utils/array-shuffle';

export const Quiz = () => {
  const [counter, setCounter] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newQuiz] = useState(() => arrayShuffle(questionsAndAnswers));

  const checkAnswer = (answer: TQuizQuestionAnswer) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (answer.isCorrect) {
      setCounter(counter + 1);
    } else {
      return;
    }
  };

  return currentQuestionIndex < 10 ? (
    <Styled.All>
      <Styled.Quiz>{newQuiz[currentQuestionIndex].questionText}</Styled.Quiz>
      <Styled.Answers>
        {newQuiz[currentQuestionIndex].answers.map((answer, index) => (
          <Styled.AnswersColum key={index} onClick={() => checkAnswer(answer)}>
            {answer.answerText}
          </Styled.AnswersColum>
        ))}
      </Styled.Answers>
    </Styled.All>
  ) : (
    <Styled.Finally>Դուք հավաքել եք {counter}միվոր</Styled.Finally>
  );
};
