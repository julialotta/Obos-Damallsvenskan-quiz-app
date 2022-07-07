export interface IQuiz {
  id: number;
  team: string;
  questionsAndAnswers: IGameQuestions[];
}

interface IGameQuestions {
  id: number;
  question: string;
  answers: IAnswers[];
}

interface IAnswers {
  answer: string;
  isCorrect: boolean;
}
