export interface ITeams {
  id: number;
  team: string;
  image: string;
  games: IGames[];
}

export interface IGames {
  round: number;
  opponent: string;
  datestamp: Date;
  arena: string;
}
