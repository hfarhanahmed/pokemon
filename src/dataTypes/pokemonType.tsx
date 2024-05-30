// Pokemon details datatype
export type pokemon = {
  name: string;
  height: number;
  weight: number;
  sprites: pokemonSprites;
  types: Array<pokemonTypeArray>;
};

// Pokemon types array in pokemon details
type pokemonTypeArray = {
  slot: number;
  type: pokemonType;
};

// Pokemon type in pokemon details types
type pokemonType = {
  name: string;
  url: string;
};

// Pokemon sprites object in pokemon details
type pokemonSprites = {
  front_default: string;
};
