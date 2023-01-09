import { ITeams } from "../models/ITeams";

const SESSIONSTORAGE_KEY_QUIZ = "quiz";
const SESSIONSTORAGE_KEY_GAME = "game";
const LOCALSTORAGE_BROWSER = "browser";

export const getGame = <ITeams>() => {
  let valueFromLS = sessionStorage.getItem(SESSIONSTORAGE_KEY_GAME) || "{}";
  return JSON.parse(valueFromLS) as ITeams;
};
export const getQuiz = <T>(): T[] => {
  let valueFromLS = sessionStorage.getItem(SESSIONSTORAGE_KEY_QUIZ) || "[]";
  return JSON.parse(valueFromLS) as T[];
};

export const saveGame = (data: ITeams): void => {
  sessionStorage.setItem(SESSIONSTORAGE_KEY_GAME, JSON.stringify(data));
};

export const saveQuiz = <T>(data: T): void => {
  sessionStorage.setItem(SESSIONSTORAGE_KEY_QUIZ, JSON.stringify(data));
};

export const saveUser = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_BROWSER, JSON.stringify(data));
};

export const getUser = <T>(): T => {
  let valueFromLS = localStorage.getItem(LOCALSTORAGE_BROWSER) || "[]";
  return JSON.parse(valueFromLS) as T;
};
