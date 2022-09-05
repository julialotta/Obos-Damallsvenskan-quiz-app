export interface IOpponent {
  id: number;
  round: number;
  opponent: string;
  datestamp: Date;
  link: string;
  arena: string;
}

export interface IGame {
  id: number;
  team: string;
  round: number;
  opponentid: number;
  opponent: string;
  arena: string;
  date: string;
  link: string;
}
export interface IScores {
  id: number;
  scores: number;
}
export interface ITeams {
  id: number;
  team: string;
}
