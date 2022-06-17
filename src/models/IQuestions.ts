export interface IQuestions {
  id: number;
  team: string;
  question: string;
  answers: [
    { answer: string; isCorrect: boolean },
    { answer: string; isCorrect: boolean },
    { answer: string; isCorrect: boolean }
  ];
}
