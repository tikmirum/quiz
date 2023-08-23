export type TQuizQuestion = {
  questionText: string;
  answers: Array<TQuizQuestionAnswer>;
};
export type TQuizQuestionAnswer = {
  answerText: string;
  isCorrect: boolean;
};
