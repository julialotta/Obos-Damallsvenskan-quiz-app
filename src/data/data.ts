import { IQuestions } from "../models/IQuestions";

//TEST-LIST
// Divide into teams or gather in one list?

export const QuestionsAndAnswers: IQuestions[] = [
  {
    id: 0,
    team: "AIK",
    question:
      "AIK:s fotbollssektion för damer bildades 1970.  På AIK:s klubbemblem står dock ett annat årtal, nämligen då själva föreningen grundades. Vilket är årtalet?",
    answers: [
      { answer: "1890", isCorrect: false },
      { answer: "1891", isCorrect: true },
      { answer: "1893", isCorrect: false },
    ],
  },
  {
    id: 1,
    team: "IF Brommapojkarna",
    question:
      "2022 flyttades BP upp till OBOS Damallsvenskan för första gången. Hur många poäng fick laget i Elitettan säsongen 2021?",
    answers: [
      { answer: "48 poäng", isCorrect: false },
      { answer: "49 poäng", isCorrect: true },
      { answer: "50 poäng", isCorrect: false },
    ],
  },
  {
    id: 2,
    team: "Djurgårdens IF Dam",
    question:
      "På grund av en sammanslagning med Älvsjö 2003 är det många som tror att Djurgårdens damlag bildades först då. Detta är helt felaktigt, då Djurgårdens damer varit aktiva sedan:",
    answers: [
      { answer: "1960-talet", isCorrect: true },
      { answer: "1970-talet", isCorrect: false },
      { answer: "1980-talet", isCorrect: false },
    ],
  },
];
