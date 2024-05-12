type EpisodeType = {
  id: string;
  name: string;
};

type ResultType = {
  id: string;
  image: string;
  episode: EpisodeType[];
  name: string;
  __typename: string;
};

type InfoType = {
  count: number;
  __typename: string;
};

type CharactersType = {
  info: InfoType;
  results: ResultType[];
};

export interface CharactersResponse {
  characters: CharactersType;
}
