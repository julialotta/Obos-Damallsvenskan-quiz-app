export interface IQuiz {
  id: number;
  team: string;
  questionsAndAnswers: IGameQuestions[];
}

export interface IGameQuestions {
  id: number;
  question: string;
  answers: IAnswers[];
}

export interface IAnswers {
  answer: string;
  isCorrect: boolean;
}
export interface IResult {
  answer: string;
  isCorrect: boolean;
}
