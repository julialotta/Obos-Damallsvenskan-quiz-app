const SESSIONSTORAGE_KEY_QUIZ = "quiz";
const SESSIONSTORAGE_KEY_GAME = "game";

export const getGame = <IGame>() => {
  let valueFromLS = sessionStorage.getItem(SESSIONSTORAGE_KEY_GAME) || "{}";
  return JSON.parse(valueFromLS) as IGame;
};
export const getQuiz = <T>(): T[] => {
  let valueFromLS = sessionStorage.getItem(SESSIONSTORAGE_KEY_QUIZ) || "[]";
  return JSON.parse(valueFromLS) as T[];
};

export const saveGame = <IGame>(data: IGame): void => {
  sessionStorage.setItem(SESSIONSTORAGE_KEY_GAME, JSON.stringify(data));
};
export const saveQuiz = <T>(data: T): void => {
  sessionStorage.setItem(SESSIONSTORAGE_KEY_QUIZ, JSON.stringify(data));
};
