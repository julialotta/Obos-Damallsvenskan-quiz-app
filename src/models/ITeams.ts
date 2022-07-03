export interface ITeams {
  id: number;
  team: string;
  image: string;
  AOMemblem: string;
  background: string;
  games: IGames[];
}

interface IGames {
  round: number;
  opponent: string;
  image: string;
  datestamp: Date;
  link: string;
  arena: string;
}
export interface IOpponent {
  round: number;
  image: string;
  opponent: string;
  datestamp: Date;
  link: string;
  arena: string;
}
