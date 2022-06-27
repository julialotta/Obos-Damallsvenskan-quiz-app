export interface ITeams {
  id: number;
  team: string;
  image: string;
  games: IGames[];
}

export interface IOpponent {
  team: string;
  image: string;
}

interface IGames {
  round: number;
  opponent: string;
  datestamp: Date;
  arena: string;
}
