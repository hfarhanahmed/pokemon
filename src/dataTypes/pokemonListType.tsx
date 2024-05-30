// Pokemon List Datatype
export type BaseResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonList>;
};

export type PokemonList = {
  name: string;
  url: string;
};
