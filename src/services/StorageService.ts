const SESSIONSTORAGE_KEY = "quiz";

export const getList = <T>(): T[] => {
  let valueFromLS = sessionStorage.getItem(SESSIONSTORAGE_KEY) || "[]";
  return JSON.parse(valueFromLS) as T[];
};

export const save = <T>(data: T): void => {
  sessionStorage.setItem(SESSIONSTORAGE_KEY, JSON.stringify(data));
};
