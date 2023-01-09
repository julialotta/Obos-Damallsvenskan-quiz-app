import { get, post } from "./handleAxiosRequests.service";
import { IGames } from "../models/ITeams";

export async function fetchScores(): Promise<IGames[]> {
  const url: string = `${process.env.REACT_APP_QUIZ_URI}`;
  return (await get<IGames[]>(url)).data;
}

export async function fetchScoreByID(id: number): Promise<IGames> {
  const url: string = `${process.env.REACT_APP_QUIZ_URI}/` + id;
  return (await get<IGames>(url)).data;
}

export async function postScore(score: IGames) {
  const url: string = `${process.env.REACT_APP_QUIZ_POST}`;

  return (await post<IGames, IGames>(url, score)).data;
}
